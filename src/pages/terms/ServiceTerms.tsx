/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../../components/commons/Flex';
import BackHeader from '../../components/commons/BackHeader';

const ServiceTerms = () => {
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
      <BackHeader firstTitle="서비스 이용약관" />
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
          <h2>제1조 (목적)</h2>
          <p>본 약관은 Wanna Eat(이하 "회사")이 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.</p>
          
          <h2>제2조 (용어의 정의)</h2>
          <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
          <p>1. "서비스"란 회사가 제공하는 모든 서비스를 의미합니다.</p>
          <p>2. "회원"이란 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 개인을 의미합니다.</p>
          
          <h2>제3조 (약관의 효력 및 변경)</h2>
          <p>1. 본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.</p>
          <p>2. 회사는 합리적인 사유가 있는 경우 관련 법령에 따라 본 약관을 변경할 수 있습니다.</p>
        </div>
      </Col>
    </Col>
  );
};

export default ServiceTerms;
