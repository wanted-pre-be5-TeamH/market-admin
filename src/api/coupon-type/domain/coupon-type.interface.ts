import { BaseAggregate } from 'src/api/common/base/base-aggregate';
import { Implements } from 'src/api/common/interface/class.interface';

export namespace CouponTypeDomain {
  export type Id = number;

  export interface Property extends BaseAggregate<Id> {
    flat_price: number;
    discount_price: number; //rate보다 먼저 적용되야 함
    discount_rate: number; // 0~1 사이의 숫자
  }

  export type Response = Pick<
    Property,
    'id' | 'flat_price' | 'discount_price' | 'discount_rate'
  >;

  interface Method {
    getResponse: () => Response;
    caculateDiscountedPrice: (price: number) => number;
  }

  export type Aggregate = Property & Method;

  export type Props = Pick<
    Property,
    'flat_price' | 'discount_price' | 'discount_rate'
  > &
    Partial<Pick<Property, 'id' | 'created_at' | 'updated_at'>>;

  interface StaticMethod {
    get: (props: Props) => Aggregate;
  }

  export type Static<C extends StaticMethod> = Implements<
    Aggregate,
    StaticMethod,
    C
  >;
}
