import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import { CouponTypeApplication } from '../application/dto/coupon-type.dto';

export class FindOneCouponTypeParam {
  @IsNumber()
  @Type(() => Number)
  coupon_type_id: number;
}

export class CreateCouponTypeBody
  implements CouponTypeApplication.CreateUsecaseDTO
{
  @IsOptional()
  @IsNumber()
  flat_price?: number;

  @IsOptional()
  @IsNumber()
  discount_price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  discount_rate?: number;
}
