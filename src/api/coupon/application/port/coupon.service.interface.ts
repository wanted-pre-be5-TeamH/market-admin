import { CouponDomain } from '../../domain/coupon.interface';
import { CouponServiceDTO } from '../dto/coupon.service.dto';

export interface ICouponService {
  findOne: (dto: CouponServiceDTO.FindOne) => Promise<CouponDomain.Aggregate>;
  calculateDiscountedPrice: (
    price: number,
    coupon: CouponDomain.CouponType,
  ) => number;
}
