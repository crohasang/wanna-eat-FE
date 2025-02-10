import BackHeader from '../components/commons/BackHeader';
import { Col } from '../components/commons/Flex';

const MakeGroupConfirm = () => {
  return (
    <Col>
      <BackHeader
        firstTitle='멋팟을 생성할 식당/카페 '
        secondTitle='정보를 확인해주세요.'
        alignLeft={true}
      />
    </Col>
  );
};

export default MakeGroupConfirm;
