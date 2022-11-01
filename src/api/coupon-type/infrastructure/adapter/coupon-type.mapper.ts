import { Injectable } from '@nestjs/common';
import { IEntityMapper } from 'src/api/common/interface/mapper.interface';
import { CouponType } from '../../domain/coupon-type.aggregte';
import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeEntity } from '../model/coupon-type.entity';

@Injectable()
export class CouponTypeEntityMapper
  implements IEntityMapper<CouponTypeDomain.Aggregate, CouponTypeEntity>
{
  toAggregate(entity: CouponTypeEntity): CouponTypeDomain.Aggregate {
    const {
      id,
      created_at,
      updated_at,
      flat_price,
      discount_price,
      discount_rate,
    } = entity;

    return CouponType.get({
      id,
      created_at,
      updated_at,
      flat_price,
      discount_price,
      discount_rate,
    });
  }
  toRootEntity(aggregate: CouponTypeDomain.Aggregate): CouponTypeEntity {
    const { id, flat_price, discount_price, discount_rate } = aggregate;
    const entity = new CouponTypeEntity();
    if (id != 0) {
      entity.id = id;
    }
    entity.discount_price = discount_price;
    entity.discount_rate = discount_rate;
    entity.flat_price = flat_price;
    return entity;
  }
}
