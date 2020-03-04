import { types } from 'react-bricks'

const pageTypeSchema = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
]

export default pageTypeSchema