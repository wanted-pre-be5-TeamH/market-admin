import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmBaseRepository } from 'src/api/common/base/base-repository.typeorm';
import { IEntityMapper } from 'src/api/common/interface/mapper.interface';
import { Repository } from 'typeorm';
import { CouponType } from '../../domain/coupon-type.aggregte';
import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeEntity } from '../model/coupon-type.entity';
import { ICouponTypeRepository } from '../port/coupon-type.repository.interface';
import { CouponTypeEntityMapper } from './coupon-type.mapper';

interface CouponTypeRaw
  extends Pick<
    CouponTypeDomain.Property,
    'id' | 'flat_price' | 'discount_price' | 'discount_rate'
  > {
  created_at: string;
  updated_at: string;
  count_used: string;
  count_unused: string;
  total_discounted_price: string | null;
}

@Injectable()
export class CouponTypeRepository
  extends TypeOrmBaseRepository<CouponTypeDomain.Aggregate, CouponTypeEntity>
  implements ICouponTypeRepository
{
  constructor(
    @Inject(CouponTypeEntityMapper)
    mapper: IEntityMapper<CouponTypeDomain.Aggregate, CouponTypeEntity>,
    @InjectRepository(CouponTypeEntity)
    repository: Repository<CouponTypeEntity>,
  ) {
    super(mapper, repository);
  }

  async findMany(): Promise<CouponTypeDomain.Aggregate[]> {
    const coupontypes = (
      await this.getRepository()
        .createQueryBuilder('coupon_types')
        .leftJoin('coupon_types.coupons', 'coupons')
        .select('coupon_types.id', 'id')
        .addSelect('coupon_types.created_at', 'created_at')
        .addSelect('coupon_types.updated_at', 'updated_at')
        .addSelect('coupon_types.flat_price', 'flat_price')
        .addSelect('coupon_types.discount_price', 'discount_price')
        .addSelect('coupon_types.discount_rate', 'discount_rate')
        .addSelect(
          'COUNT(case when coupons.active = 1 then 1 end)',
          'count_used',
        )
        .addSelect(
          'COUNT(case when coupons.active = 0 then 1 end)',
          'count_unused',
        )
        .addSelect('SUM(coupons.discounted_price)', 'total_discounted_price')
        .groupBy('coupon_types.id')
        .getRawMany<CouponTypeRaw>()
    ).map(
      ({
        id,
        created_at,
        updated_at,
        flat_price,
        discount_price,
        discount_rate,
        count_unused,
        count_used,
        total_discounted_price,
      }) => {
        return CouponType.get({
          id,
          created_at: new Date(created_at),
          updated_at: new Date(updated_at),
          flat_price,
          discount_price,
          discount_rate,
          count_unused: +count_unused,
          count_used: +count_used,
          total_discounted_price: total_discounted_price
            ? +total_discounted_price
            : 0,
        });
      },
    );
    return coupontypes;
  }
}
