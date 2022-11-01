import { IsNumber } from 'class-validator';
import { TypeOrmBaseEntity } from 'src/api/common/base/base-entity.typeorm';
import { CouponEntity } from 'src/api/coupon/infrastructure/model/coupon.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';

@Unique(['flat_price', 'discount_price', 'discount_rate'])
@Entity({ name: 'coupon_types' })
export class CouponTypeEntity extends TypeOrmBaseEntity {
  @Column()
  @IsNumber()
  flat_price: number;

  @Column()
  @IsNumber()
  discount_price: number;

  @Column({ type: 'float' })
  @IsNumber()
  discount_rate: number;

  @OneToMany(() => CouponEntity, (entity) => entity.coupon_type)
  coupons: CouponEntity[];
}
