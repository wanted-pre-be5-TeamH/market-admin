import { IsNumber, IsString } from 'class-validator';

export class CreateCouponBody {
  @IsNumber()
  coupon_type_id: number;
}

export class FindOneCouponParam {
  @IsString()
  coupon_code: string;
}
