import Router from 'next/router'
import { types } from 'react-bricks/frontend'

import bricks from './bricks'
import pageTypes from './pageTypes'
import NextLink from './NextLink'

const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.API_KEY,
  pageTypes,
  bricks,
  logo: '/logo.svg',
  previewPath: '/preview',
  // contentClassName: 'content', // Defined dynamically
  // isDarkColorMode: ...,        // in _app.tsx
  // toggleColorMode: ...,        // to manage Dark Mode
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#__next',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
}

export default config
