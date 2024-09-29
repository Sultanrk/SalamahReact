import './Msgs.css';
import '../../App.css';
import { motion } from 'framer-motion';
import { Flex, Row, Col } from 'antd';
import {
  MessageFilled,
} from '@ant-design/icons';


function Msgs() {
  return (
    <>
      <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div class="msgbox">
        <Flex gap="small">
          <MessageFilled className="logo" />
          <h1 class="cardheader">Messages</h1>
        </Flex>

        <div class="msg">
        <Flex align="center">
        <div> 
        <MessageFilled className="senderlogo" />
        </div>
        <div class="msgcontent">
          <h2 class="senderheader">Mohammed</h2>
          <p>Hello Abdullah, I have sent you the report regarding yesterday's incident.</p>
        </div>
        </Flex>
        </div>

        <div class="msg">
        <Flex align="center">
        <div> 
        <MessageFilled className="senderlogo" />
        </div>
        <div class="msgcontent">
          <h2 class="senderheader">Abdulaziz</h2>
          <p>Hello Nasser, I have sent you the report regarding yesterday's incident.</p>
        </div>
        </Flex>
        </div>
        


      </div>
    </motion.div>
    </>
  );
}

export default Msgs;
