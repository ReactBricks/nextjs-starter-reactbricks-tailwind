import { types } from 'react-bricks'
import { website } from 'react-bricks-ui'
import HeroUnit from './MyHeroUnit'

// React Bricks UI + Custom HeroUnit brick
const bricks: types.Brick<any>[] = [...website, HeroUnit]

export default bricks