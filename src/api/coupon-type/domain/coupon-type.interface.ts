import { BaseAggregate } from 'src/api/common/base/base-aggregate';
import { Implements } from 'src/api/common/interface/class.interface';

export namespace CouponTypeDomain {
  export type Id = number;

  export interface Property extends BaseAggregate<Id> {
    readonly flat_price: number;
    readonly discount_price: number; //rate보다 먼저 적용되야 함
    readonly discount_rate: number; // 0~1 사이의 숫자

    readonly count_unused: number;
    readonly count_used: number;
    readonly total_discounted_price: number;
  }

  export type Response = Pick<
    Property,
    | 'id'
    | 'flat_price'
    | 'discount_price'
    | 'discount_rate'
    | 'count_used'
    | 'count_unused'
    | 'total_discounted_price'
  >;

  interface Method {
    getResponse: () => Response;
  }

  export type Aggregate = Property & Method;

  export type Props = Pick<
    Property,
    'flat_price' | 'discount_price' | 'discount_rate'
  > &
    Partial<
      Pick<
        Property,
        | 'id'
        | 'created_at'
        | 'updated_at'
        | 'count_unused'
        | 'count_used'
        | 'total_discounted_price'
      >
    >;

  interface StaticMethod {
    get: (props: Props) => Aggregate;
  }

  export type Static<C extends StaticMethod> = Implements<
    Aggregate,
    StaticMethod,
    C
  >;
}
