import './AInsights.css'
import '../../App.css';

import { Flex } from 'antd';
import {
  HomeFilled,
} from '@ant-design/icons';

function AInsights() {

  return (
    <>
<div class="insights">
<Flex gap="small">
          <HomeFilled className="logo" />
          <h1 class="cardheader">Insights</h1>
        </Flex>
      </div>

    </>
  )
}

export default AInsights