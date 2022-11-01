# 쇼핑몰 관리 시스템, Market-Admin

<div align=center>

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=plastic&logo=nestjs&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white)


[![Test Status](https://github.com/wanted-pre-be5-TeamH/market-admin/actions/workflows/push_cov_report.yml/badge.svg)](https://github.com/wanted-pre-be5-TeamH/market-admin/actions/workflows/push_cov_report.yml)
[![Test Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/rojiwon0325/e9d685dac7c70dfad1305ce9d8174a29/raw/coverage_market-admin.json)](https://wanted-pre-be5-teamh.github.io/market-admin)


</div>

## 요구사항 분석

- 주문 내역 조회 및 검색
  - 주문 상태, 시작 일자, 종료 일자 주문자명 기준
- 주문 배송 상태 변경
  - 발송 처리(배송 중), 배송 완료
- 쿠폰 타입 생성
  - 배송비 할인, %할인, 정액 할인 기준
  - 구체적인 수치가 적용된 타입을 생성
- 쿠폰 생성
  - 쿠폰 코드 발급
- 쿠폰 내역 조회
  - 쿠폰 타입별 사용 횟수, 총 할인액
------------
- 테스트용 주문 API
  - 쿠폰적용
  - 구매 국가, 상품수에 따른 배송비 적용
  - 1달러 = 1200원 계산
## 설계도

### 주문 내역 조회

![주문 내역 조회](https://user-images.githubusercontent.com/68629004/199132884-f899ab5f-b3e7-42c2-91be-51938608b5e9.png)

### 주문 처리 과정

- 주문 요청
- 발송 승인
- 발송 처리
- 배송 완료
- 구매 확정

![주문 처리 과정](https://user-images.githubusercontent.com/68629004/199133187-047080f8-9903-4351-80bc-a961f5ad6baa.png)

### 환불/취소

![환불/취소](https://user-images.githubusercontent.com/68629004/199133275-f6b31c35-57cc-4594-838b-5336368a55d9.png)

### 쿠폰

- 쿠폰 타입별 조회
- 쿠폰 생성

![쿠폰](https://user-images.githubusercontent.com/68629004/199133390-36f273c1-b7c0-4b41-a8a6-ac56480e5c08.png)

### 쿠폰 타입 생성

![image](https://user-images.githubusercontent.com/68629004/199133439-ee58db62-ed61-414e-b2ec-8fc5d8ac0b90.png)

## 진행상황

- [ ] excel 접근 시스템 구현
- [ ] 주문 내역 조회 및 검색
- [ ] 주문 배송 상태 변경
- [ ] 쿠폰 타입 생성
- [ ] 쿠폰 생성
- [ ] 쿠폰 내역 조회
- [ ] 테스트용 주문 API