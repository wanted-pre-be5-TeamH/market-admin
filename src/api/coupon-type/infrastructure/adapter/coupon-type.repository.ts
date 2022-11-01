import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmBaseRepository } from 'src/api/common/base/base-repository.typeorm';
import { IEntityMapper } from 'src/api/common/interface/mapper.interface';
import { Repository } from 'typeorm';
import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeEntity } from '../model/coupon-type.entity';
import { ICouponTypeRepository } from '../port/coupon-type.repository.interface';
import { CouponTypeEntityMapper } from './coupon-type.mapper';

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
}
