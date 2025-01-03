import BottomNavigation from '../components/commons/BottomNavigation';
import Header from '../components/commons/Header';

const MyPage = () => {
  return (
    <>
      <Header text='마이페이지' />
      <BottomNavigation active='home' />
    </>
  );
};

export default MyPage;
