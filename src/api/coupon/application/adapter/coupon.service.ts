import { Inject, Injectable } from '@nestjs/common';
import { httpExceptionProvider } from 'src/api/common/provider/exception.provider';
import { ExceptionMessage } from 'src/api/common/provider/message.provider';
import { Coupon } from '../../domain/coupon.aggregate';
import { CouponDomain } from '../../domain/coupon.interface';
import { CouponRepository } from '../../infrastructure/adapter/coupon.repository';
import { ICouponRepository } from '../../infrastructure/port/coupon.repository.interface';
import { CouponServiceDTO } from '../dto/coupon.service.dto';
import { ICouponService } from '../port/coupon.service.interface';

@Injectable()
export class CouponService implements ICouponService {
  constructor(
    @Inject(CouponRepository)
    private readonly couponRepository: ICouponRepository,
  ) {}

  async findOne({
    code,
  }: CouponServiceDTO.FindOne): Promise<CouponDomain.Aggregate> {
    const coupon = await this.couponRepository.findOne({ code });
    if (coupon == null) {
      throw httpExceptionProvider('404', ExceptionMessage.NotFound);
    }
    return coupon;
  }

  calculateDiscountedPrice(
    price: number,
    coupon: CouponDomain.CouponType,
  ): number {
    return Coupon.calculateDiscountedPrice(price, coupon);
  }
}
