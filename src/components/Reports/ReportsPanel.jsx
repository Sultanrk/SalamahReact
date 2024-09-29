import './ReportsPanel.css'
import '../../App.css';

import { Flex } from 'antd';
import {
  HomeFilled,
} from '@ant-design/icons';

function ReportsPanel() {

  return (
    <>
<div class="reports">
<Flex gap="small">
          <HomeFilled className="logo" />
          <h1 class="cardheader">Reports</h1>
        </Flex>
      </div>

    </>
  )
}

export default ReportsPanel