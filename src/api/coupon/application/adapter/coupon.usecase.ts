import { Inject, Injectable } from '@nestjs/common';
import { CouponTypeService } from 'src/api/coupon-type/application/adapter/coupon-type.service';
import { ICouponTypeService } from 'src/api/coupon-type/application/port/coupon-type.service.interface';
import { Coupon } from '../../domain/coupon.aggregate';
import { CouponDomain } from '../../domain/coupon.interface';
import { CouponRepository } from '../../infrastructure/adapter/coupon.repository';
import { ICouponRepository } from '../../infrastructure/port/coupon.repository.interface';
import { CouponUsecaseDTO } from '../dto/coupon.usecase.dto';
import { ICouponService } from '../port/coupon.service.interface';
import { ICouponUsecase } from '../port/coupon.usecase.interface';
import { CouponService } from './coupon.service';

@Injectable()
export class CouponUsecase implements ICouponUsecase {
  constructor(
    @Inject(CouponTypeService)
    private readonly couponTypeService: ICouponTypeService,
    @Inject(CouponService)
    private readonly couponService: ICouponService,
    @Inject(CouponRepository)
    private readonly couponRepository: ICouponRepository,
  ) {}
  async create({
    coupon_type_id,
  }: CouponUsecaseDTO.Create): Promise<CouponDomain.Response> {
    const { discount_price, discount_rate, flat_price } =
      await this.couponTypeService.findOne({ id: coupon_type_id });
    const code = Coupon.createCode();
    const coupon_type = {
      discount_price,
      discount_rate,
      flat_price,
    };
    const coupon = Coupon.get({
      code,
      coupon_type_id,
      coupon_type,
    });
    return (await this.couponRepository.save(coupon)).getResponse();
  }

  async findOne({
    code,
  }: CouponUsecaseDTO.FindOne): Promise<CouponDomain.Response> {
    const coupon = await this.couponService.findOne({ code });
    return coupon.getResponse();
  }

  async findMany(): Promise<CouponDomain.Response[]> {
    return (await this.couponRepository.findMany()).map((coupon) =>
      coupon.getResponse(),
    );
  }
}
