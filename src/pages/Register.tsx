/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BackButton from '../components/common/BackButton';
import Button from '../components/common/Button';
import ProgressBar from '../components/register/ProgressBar';
import { Col } from '../components/commons/Flex';
import NameStep from '../components/register/NameStep';
import GenderStep from '../components/register/GenderStep';

const Register = () => {
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

  const handleNextStep = () => {
    if (step === 1 && nickname.trim()) {
      setStep(2);
    } else if (step === 2 && gender) {
      // Handle final submission
      console.log('Submitted:', { nickname, gender });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Col
      css={css`
        height: 100vh;
        width: 100vw;
        padding: 0 20px;
      `}
      justifyContent="space-between"
      alignItems="center"
    >
      <Col
        css={css`
          width: 100%;
          max-width: 400px;
          padding: 20px;
          flex: 1;
        `}
        gap="24px"
        alignItems="center"
      >
        <div
          css={css`
            width: 100%;
            margin-bottom: 40px;
          `}
        >
          {step === 1 ? (
            <BackButton to="/" />
          ) : (
            <BackButton onClick={handleBack} />
          )}
          <ProgressBar currentStep={step} totalSteps={7} />
        </div>
        
        {step === 1 ? (
          <NameStep 
            nickname={nickname}
            onNicknameChange={setNickname}
          />
        ) : (
          <GenderStep
            gender={gender}
            onGenderChange={setGender}
          />
        )}
      </Col>
      
      <div
        css={css`
          width: 100%;
          max-width: 400px;
          padding: 20px;
        `}
      >
        <Button 
          onClick={handleNextStep}
          disabled={step === 1 ? !nickname.trim() : !gender}
        >
          다음
        </Button>
      </div>
    </Col>
  );
};

export default Register;