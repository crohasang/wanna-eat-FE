/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BackButton from '../components/common/BackButton';
import Button from '../components/common/Button';
import ProgressBar from '../components/register/ProgressBar';
import { Col } from '../components/commons/Flex';
import NameStep from '../components/register/NameStep';
import GenderStep from '../components/register/GenderStep';
import DepartmentStep from '../components/register/DepartmentStep';
import RestaurantTypeStep from '../components/register/RestaurantTypeStep';
import RestaurantCharacteristicsStep from '../components/register/RestaurantCharacteristicsStep';
import CafeBrandStep from '../components/register/CafeBrandStep';

const Register = () => {
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [department, setDepartment] = useState('');
  const [restaurantType, setRestaurantType] = useState('');
  const [characteristics, setCharacteristics] = useState({
    atmosphere: '',
    purpose: '',
    size: ''
  });
  const [cafeBrandSearch, setCafeBrandSearch] = useState('');

  const handleNextStep = () => {
    if (step === 1 && nickname.trim()) {
      setStep(2);
    } else if (step === 2 && gender) {
      setStep(3);
    } else if (step === 3 && department) {
      setStep(4);
    } else if (step === 4 && restaurantType) {
      setStep(5);
    } else if (step === 5 && characteristics.atmosphere && characteristics.purpose && characteristics.size) {
      setStep(6);
    } else if (step === 6) {
      // Handle final submission
      console.log('Submitted:', {
        nickname,
        gender,
        department,
        restaurantType,
        characteristics,
        cafeBrandSearch
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCharacteristicChange = (category: 'atmosphere' | 'purpose' | 'size', value: string) => {
    setCharacteristics(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const getCurrentStep = () => {
    switch (step) {
      case 1:
        return <NameStep nickname={nickname} onNicknameChange={setNickname} />;
      case 2:
        return <GenderStep gender={gender} onGenderChange={setGender} />;
      case 3:
        return <DepartmentStep department={department} onDepartmentChange={setDepartment} />;
      case 4:
        return <RestaurantTypeStep selectedType={restaurantType} onTypeChange={setRestaurantType} />;
      case 5:
        return (
          <RestaurantCharacteristicsStep
            characteristics={characteristics}
            onCharacteristicChange={handleCharacteristicChange}
          />
        );
      case 6:
        return (
          <CafeBrandStep
            searchQuery={cafeBrandSearch}
            onSearchChange={setCafeBrandSearch}
          />
        );
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !nickname.trim();
      case 2:
        return !gender;
      case 3:
        return !department;
      case 4:
        return !restaurantType;
      case 5:
        return !(characteristics.atmosphere && characteristics.purpose && characteristics.size);
      case 6:
        return false; // 검색어는 필수가 아님
      default:
        return true;
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
        
        {getCurrentStep()}
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
          disabled={isNextDisabled()}
        >
          다음
        </Button>
      </div>
    </Col>
  );
};

export default Register;