import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmBaseRepository } from 'src/api/common/base/base-repository.typeorm';
import { IEntityMapper } from 'src/api/common/interface/mapper.interface';
import { Repository } from 'typeorm';
import { CouponDomain } from '../../domain/coupon.interface';
import { CouponEntity } from '../model/coupon.entity';
import { ICouponRepository } from '../port/coupon.repository.interface';
import { CouponEntityMapper } from './coupon.mapper';

@Injectable()
export class CouponRepository
  extends TypeOrmBaseRepository<CouponDomain.Aggregate, CouponEntity>
  implements ICouponRepository
{
  constructor(
    @Inject(CouponEntityMapper)
    mapper: IEntityMapper<CouponDomain.Aggregate, CouponEntity>,
    @InjectRepository(CouponEntity)
    repository: Repository<CouponEntity>,
  ) {
    super(mapper, repository);
  }

  private relation = {
    relations: { coupon_type: true },
    select: {
      coupon_type: {
        id: true,
        discount_price: true,
        discount_rate: true,
        flat_price: true,
      },
    },
  };

  async findOne(
    where:
      | Pick<CouponDomain.Property, 'code'>
      | Pick<CouponDomain.Property, 'id'>,
  ): Promise<CouponDomain.Aggregate | null> {
    const coupon = await this.getRepository().findOne({
      where,
      ...this.relation,
    });
    return coupon == null ? null : this.getMapper().toAggregate(coupon);
  }

  async findMany(): Promise<CouponDomain.Aggregate[]> {
    return (await this.getRepository().find(this.relation)).map(
      this.getMapper().toAggregate,
    );
  }
}
