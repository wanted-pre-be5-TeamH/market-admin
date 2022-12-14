import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeUsecaseDTO } from '../dto/coupon-type.usecase.dto';

export interface ICouponTypeUsecase {
  create: (
    dto: CouponTypeUsecaseDTO.Create,
  ) => Promise<CouponTypeDomain.Response>;

  findOne: (
    dto: CouponTypeUsecaseDTO.FindOne,
  ) => Promise<CouponTypeDomain.Response>;
  findMany: () => Promise<CouponTypeDomain.Response[]>;
}
