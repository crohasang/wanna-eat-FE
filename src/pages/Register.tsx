/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Col } from '../components/commons/Flex';
import BackHeader from '../components/commons/BackHeader';
import CheckBox from '../components/commons/CheckBox';
import AgreementButton from '../components/commons/AgreementButton';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [agreements, setAgreements] = useState({
    service: false,
    privacy: false,
    thirdParty: false,
  });
  const navigate = useNavigate();

  const handleAllCheck = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setAgreements({
      service: newValue,
      privacy: newValue,
      thirdParty: newValue,
    });
  };

  const handleAgreementCheck = (key: keyof typeof agreements) => {
    const newAgreements = {
      ...agreements,
      [key]: !agreements[key],
    };
    setAgreements(newAgreements);
    setAllChecked(Object.values(newAgreements).every(value => value));
  };

  return (
    <Col
      css={css`
        height: 100%;
        width: 100%;
        max-width: 400px;
        position: fixed;
        padding-left: 20px;
        padding-right: 20px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `}
    >
      <BackHeader title='회원가입' />
      <div css={css`
        margin-top: 39px;
        padding: 10px 50px 20px 20px;
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
        gap: 270px;
        align-items: center;
        border-bottom: 1px solid var(--Gray, #E1E1E1);
      `}>
        <span css={css`
          color: var(--Text, #3D3D3D);
          font-family: Pretendard;
          font-size: 16px;
        `}>전체 동의</span>
        <CheckBox
          checked={allChecked}
          onChange={handleAllCheck}
          width={20}
          height={20}
        />
      </div>
      <Col css={css`gap: 20px; margin-top: 20px;`}>
        <div css={css`
          display: flex;
          align-items: center;
          gap: 12px;
          & > div:last-child {
            margin-left: 16px;
            margin-top: 2px;
          }
        `}>
          <AgreementButton 
            text="서비스 이용약관 (필수)" 
            onClick={() => navigate('/terms/service')}
          />
          <CheckBox
            checked={agreements.service}
            onChange={() => handleAgreementCheck('service')}
            width={20}
            height={20}
          />
        </div>
        <div css={css`
          display: flex;
          align-items: center;
          gap: 12px;
          & > div:last-child {
            margin-left: 16px;
            margin-top: 2px;
          }
        `}>
          <AgreementButton 
            text="개인 정보 수집/이용 동의 (필수)" 
            onClick={() => navigate('/terms/privacy')}
          />
          <CheckBox
            checked={agreements.privacy}
            onChange={() => handleAgreementCheck('privacy')}
            width={20}
            height={20}
          />
        </div>
        <div css={css`
          display: flex;
          align-items: center;
          gap: 12px;
          & > div:last-child {
            margin-left: 16px;
            margin-top: 2px;
          }
        `}>
          <AgreementButton 
            text="개인 정보 제 3자 정보 제공 동의 (필수)" 
            onClick={() => navigate('/terms/third-party')}
          />
          <CheckBox
            checked={agreements.thirdParty}
            onChange={() => handleAgreementCheck('thirdParty')}
            width={20}
            height={20}
          />
        </div>
      </Col>
      <div css={css`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
      `}>
        <Button>다음</Button>
      </div>
    </Col>
  );
};

export default Register;