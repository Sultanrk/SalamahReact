import './ActivityPanel.css'
import '../../App.css';

import { Flex } from 'antd';
import {
  HomeFilled,
} from '@ant-design/icons';

function ActivityPanel() {

  return (
    <>
<div class="activity">
        <Flex gap="small">
          <HomeFilled className="logo" />
          <h1 class="cardheader">Activity</h1>
        </Flex>
      </div>

    </>
  )
}

export default ActivityPanel