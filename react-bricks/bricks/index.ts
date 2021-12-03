import { types } from 'react-bricks/frontend'
import { website } from 'react-bricks-ui'
import HeroUnit from './MyHeroUnit'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  HeroUnit, // Example custom brick
  // Put here your other bricks...
]

export default bricks
