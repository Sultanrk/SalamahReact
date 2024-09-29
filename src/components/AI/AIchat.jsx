import './AIchat.css'
import '../../App.css';

import { Flex } from 'antd';
import {
  HomeFilled,
} from '@ant-design/icons';

function AIchat() {

  return (
    <>
<div class="aichat">
<Flex gap="small">
          <HomeFilled className="logo" />
          <h1 class="cardheader">AI Chatbot</h1>
        </Flex>
      </div>

    </>
  )
}

export default AIchat