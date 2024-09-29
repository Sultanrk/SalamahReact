import ReportsPanel from '../components/Reports/ReportsPanel';
import AInsights from '../components/AI/AInsights';

import { motion } from 'framer-motion';

import { Row, Col } from 'antd';   

export default function Reports() {
  return (
    <>
      <Row gutter={[16, 16]}>
              <Col>
                <ReportsPanel />
              </Col>
              
              <Col>
              <AInsights />
              </Col>
            </Row>
    </>
  );
}