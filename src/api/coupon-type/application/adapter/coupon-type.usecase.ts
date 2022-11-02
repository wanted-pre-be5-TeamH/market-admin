import { Inject, Injectable } from '@nestjs/common';
import { CouponType } from '../../domain/coupon-type.aggregte';
import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeRepository } from '../../infrastructure/adapter/coupon-type.repository';
import { ICouponTypeRepository } from '../../infrastructure/port/coupon-type.repository.interface';
import { CouponTypeUsecaseDTO } from '../dto/coupon-type.usecase.dto';
import { ICouponTypeService } from '../port/coupon-type.service.interface';
import { ICouponTypeUsecase } from '../port/coupon-type.usecase.interface';
import { CouponTypeService } from './coupon-type.service';

@Injectable()
export class CouponTypeUsecase implements ICouponTypeUsecase {
  constructor(
    @Inject(CouponTypeRepository)
    private readonly couponTypeRepository: ICouponTypeRepository,
    @Inject(CouponTypeService)
    private readonly couponTypeService: ICouponTypeService,
  ) {}

  async create({
    flat_price = 0,
    discount_price = 0,
    discount_rate = 0,
  }: CouponTypeUsecaseDTO.Create): Promise<CouponTypeDomain.Response> {
    return (
      await this.couponTypeRepository.save(
        CouponType.get({
          flat_price,
          discount_price,
          discount_rate,
        }),
      )
    ).getResponse();
  }

  async findOne({
    id,
  }: CouponTypeUsecaseDTO.FindOne): Promise<CouponTypeDomain.Response> {
    return (await this.couponTypeService.findOne({ id })).getResponse();
  }

  async findMany(): Promise<CouponTypeDomain.Response[]> {
    return await this.couponTypeRepository.findMany();
  }
}
