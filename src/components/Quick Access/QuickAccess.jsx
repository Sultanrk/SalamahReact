import './QuickAccess.css'
import '../../App.css';

import { Flex } from 'antd';
import {
  HomeFilled,
} from '@ant-design/icons';

function QuickAccess() {

  return (
    <>
<div class="Qckbox">
<Flex gap="small">
          <HomeFilled className="logo" />
          <h1 class="cardheader">Quick Access</h1>
        </Flex>
      </div>

    </>
  )
}

export default QuickAccess