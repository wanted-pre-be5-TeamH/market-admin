import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { TypeOrmBaseEntity } from 'src/api/common/base/base-entity.typeorm';
import { CouponTypeEntity } from 'src/api/coupon-type/infrastructure/model/coupon-type.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'coupons' })
export class CouponEntity extends TypeOrmBaseEntity {
  @Column({ unique: true })
  @IsString()
  code: string;

  @Column({ default: true })
  @IsBoolean()
  active: boolean;

  @Column({ default: 0 })
  @IsNumber()
  discounted_price: number;

  @Column()
  coupon_type_id: number;

  @ManyToOne(() => CouponTypeEntity, (entity) => entity.coupons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'coupon_type_id' })
  coupon_type: CouponTypeEntity;
}
