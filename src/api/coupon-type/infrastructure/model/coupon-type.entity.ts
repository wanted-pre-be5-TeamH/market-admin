import { IsNumber } from 'class-validator';
import { TypeOrmBaseEntity } from 'src/api/common/base/base-entity.typeorm';
import { Column, Entity } from 'typeorm';

@Entity('coupon_types')
export class CouponTypeEntity extends TypeOrmBaseEntity {
  @Column()
  @IsNumber()
  flat_price: number;

  @Column()
  @IsNumber()
  discount_price: number;

  @Column()
  @IsNumber()
  discount_rate: number;
}
