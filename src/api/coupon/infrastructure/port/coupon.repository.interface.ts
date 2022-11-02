import { IBaseRepository } from 'src/api/common/interface/base-repository.interface';
import { CouponDomain } from '../../domain/coupon.interface';

export interface ICouponRepository
  extends IBaseRepository<CouponDomain.Id, CouponDomain.Aggregate> {
  findOne: (
    dto:
      | Pick<CouponDomain.Property, 'id'>
      | Pick<CouponDomain.Property, 'code'>,
  ) => Promise<CouponDomain.Aggregate | null>;
}
