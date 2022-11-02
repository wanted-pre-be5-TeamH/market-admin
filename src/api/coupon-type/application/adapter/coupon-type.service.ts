import { Inject, Injectable } from '@nestjs/common';
import { httpExceptionProvider } from 'src/api/common/provider/exception.provider';
import { ExceptionMessage } from 'src/api/common/provider/message.provider';
import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeRepository } from '../../infrastructure/adapter/coupon-type.repository';
import { ICouponTypeRepository } from '../../infrastructure/port/coupon-type.repository.interface';
import { CouponTypeServiceDTO } from '../dto/coupon-type.service.dto';
import { ICouponTypeService } from '../port/coupon-type.service.interface';

@Injectable()
export class CouponTypeService implements ICouponTypeService {
  constructor(
    @Inject(CouponTypeRepository)
    private readonly couponTypeRepository: ICouponTypeRepository,
  ) {}

  async findOne({
    id,
  }: CouponTypeServiceDTO.FindOne): Promise<CouponTypeDomain.Aggregate> {
    const couponType = await this.couponTypeRepository.findOne({ id });
    if (couponType == null) {
      throw httpExceptionProvider('404', ExceptionMessage.NotFound);
    }
    return couponType;
  }
}
