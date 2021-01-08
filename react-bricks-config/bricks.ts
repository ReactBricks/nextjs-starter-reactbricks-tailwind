import uiBricks from 'react-bricks-ui'
import { types } from 'react-bricks'

// Custom Bricks (content blocks)
import myBricks from '../components/bricks'

// React Bricks UI + Custom Bricks
const bricks: types.Brick[] = [...uiBricks, ...myBricks]

export default bricks
