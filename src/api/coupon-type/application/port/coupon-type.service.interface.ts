import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeServiceDTO } from '../dto/coupon-type.service.dto';

export interface ICouponTypeService {
  findOne: (
    dto: CouponTypeServiceDTO.FindOne,
  ) => Promise<CouponTypeDomain.Aggregate>;
}
