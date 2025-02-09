/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../components/commons/Flex';
import BackHeader from '../components/commons/BackHeader';


const Register = () => {
  return (
    <Col
    css={css`
      height: 100%;
      width: 100%;
      max-width: 400px;
      position: fixed;
      padding-left: 20px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    `}
  >
      <BackHeader title='회원가입' />
      <div css={css`
        margin-top: 39px;
        padding: 10px 70px 20px 20px;
        color: var(--Text, #3D3D3D);
        font-family: Pretendard;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.125px;
      `}>서비스 이용을 위해<br />
      이용약관 동의가 필요합니다.</div>
      <div css={css`
        display: flex;
        padding: 20px 0px 20px 10px;
        align-items: center;
        gap: 249px;
        align-self: stretch;
      `}>
        <span>전체 동의</span>
      </div>
    </Col>
  );
};

export default Register;