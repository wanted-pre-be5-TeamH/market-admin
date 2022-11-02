import { Injectable } from '@nestjs/common';
import { IEntityMapper } from 'src/api/common/interface/mapper.interface';
import { Coupon } from '../../domain/coupon.aggregate';
import { CouponDomain } from '../../domain/coupon.interface';
import { CouponEntity } from '../model/coupon.entity';

@Injectable()
export class CouponEntityMapper
  implements IEntityMapper<CouponDomain.Aggregate, CouponEntity>
{
  toAggregate(entity: CouponEntity): CouponDomain.Aggregate {
    const {
      id,
      created_at,
      updated_at,
      coupon_type_id,
      coupon_type: { flat_price, discount_price, discount_rate },
      code,
      active,
      discounted_price,
    } = entity;

    const coupon_type: CouponDomain.CouponType = {
      flat_price,
      discount_price,
      discount_rate,
    };

    return Coupon.get({
      id,
      created_at,
      updated_at,
      coupon_type_id,
      coupon_type,
      code,
      active,
      discounted_price,
    });
  }
  toRootEntity(aggregate: CouponDomain.Aggregate): CouponEntity {
    const { id, coupon_type_id, active, discounted_price, code } = aggregate;
    const entity = new CouponEntity();
    if (id == 0) {
      entity.code = code;
    } else {
      entity.id = id;
    }
    entity.discounted_price = discounted_price;
    entity.active = active;
    entity.coupon_type_id = coupon_type_id;
    return entity;
  }
}
