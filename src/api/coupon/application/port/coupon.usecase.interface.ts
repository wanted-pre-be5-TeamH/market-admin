import { CouponDomain } from '../../domain/coupon.interface';
import { CouponUsecaseDTO } from '../dto/coupon.usecase.dto';

export interface ICouponUsecase {
  create: (dto: CouponUsecaseDTO.Create) => Promise<CouponDomain.Response>;
  findOne: (dto: CouponUsecaseDTO.FindOne) => Promise<CouponDomain.Response>;
  findMany: () => Promise<CouponDomain.Response[]>;
}
