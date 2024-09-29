import './MapView.css'
import '../../App.css';

import { Flex } from 'antd';
import {
  HomeFilled,
} from '@ant-design/icons';

function MapView() {

  return (
    <>
<div class="Mapdes">
<Flex gap="small">
          <HomeFilled className="logo" />
          <h1 class="cardheader">Map</h1>
        </Flex>
      </div>

    </>
  )
}

export default MapView