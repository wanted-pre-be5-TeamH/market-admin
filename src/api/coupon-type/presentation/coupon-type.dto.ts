import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import { CouponTypeUsecaseDTO } from '../application/dto/coupon-type.usecase.dto';

export class FindOneCouponTypeParam {
  @IsNumber()
  @Type(() => Number)
  coupon_type_id: number;
}

export class CreateCouponTypeBody implements CouponTypeUsecaseDTO.Create {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  flat_price?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  discount_price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  @Type(() => Number)
  discount_rate?: number;
}
