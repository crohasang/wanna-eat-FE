/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../../components/common/Flex';
import BackHeader from '../../components/common/BackHeader';

const PrivacyPolicy = () => {
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
      <BackHeader firstTitle="개인정보 수집/이용 동의" />
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
          <h2>1. 개인정보의 수집 및 이용 목적</h2>
          <p>회사는 다음의 목적을 위하여 개인정보를 수집 및 이용합니다:</p>
          <p>- 회원 가입 및 관리</p>
          <p>- 서비스 제공 및 운영</p>
          <p>- 맞춤형 서비스 제공</p>
          
          <h2>2. 수집하는 개인정보의 항목</h2>
          <p>회사는 다음과 같은 개인정보를 수집합니다:</p>
          <p>- 필수항목: 이메일 주소, 비밀번호, 닉네임</p>
          <p>- 선택항목: 프로필 이미지, 관심 분야</p>
          
          <h2>3. 개인정보의 보유 및 이용기간</h2>
          <p>회원 탈퇴 시까지 또는 관계 법령에서 정한 보존기간까지 보관됩니다.</p>
        </div>
      </Col>
    </Col>
  );
};

export default PrivacyPolicy;
