import { ReactBricks } from 'react-bricks'
import config from '../react-bricks/config'

import '../css/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <ReactBricks {...config}>
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default MyApp
