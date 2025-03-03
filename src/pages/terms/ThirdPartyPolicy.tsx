/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../../components/common/Flex';
import BackHeader from '../../components/common/BackHeader';

const ThirdPartyPolicy = () => {
  return (
    <Col css={css`
      height: 100%;
        width: 100%;
        max-width: 400px;
        position: fixed;
        padding-left: 20px;
        padding-right: 20px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    `}>
      <BackHeader firstTitle="개인정보 제3자 제공 동의" />
      <Col css={css`
        padding: 0 20px;
        flex: 1;
      `}>
        <div css={css`
          margin-top: 20px;
          color: var(--Text, #3D3D3D);
          font-family: Pretendard;
          font-size: 14px;
          line-height: 1.6;
        `}>
          <h2>1. 개인정보를 제공받는 자</h2>
          <p>- 협력 음식점</p>
          <p>- 배달 서비스 제공 업체</p>
          
          <h2>2. 제공하는 개인정보 항목</h2>
          <p>- 이름, 연락처, 주소</p>
          <p>- 주문 정보 및 결제 정보</p>
          
          <h2>3. 제공받는 자의 이용목적</h2>
          <p>- 음식 주문 및 배달 서비스 제공</p>
          <p>- 고객 서비스 및 불만 처리</p>
          
          <h2>4. 보유 및 이용기간</h2>
          <p>개인정보는 서비스 제공 목적이 달성된 후 즉시 파기됩니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관됩니다.</p>
        </div>
      </Col>
    </Col>
  );
};

export default ThirdPartyPolicy;
