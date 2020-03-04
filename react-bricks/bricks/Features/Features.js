import React from 'react'
import { Plain, types, uuid } from 'react-bricks'

import BlockNames from '../BlockNames'

//=============================
// Colors enum
//=============================
const Colors = {
  white: { value: '#fff', label: 'White' },
  lightGray: { value: '#f7fafc', label: 'Light Gray' },
}

//=============================
// Component to be rendered
//=============================
const Features = ({ backgroundColor, renderItems }) => {
  return (
    <section className="pt-12 px-6" style={{ backgroundColor }}>
      <div className="sm:flex flex-row flex-wrap max-w-3xl mx-auto justify-between">
        {renderItems}
      </div>
    </section>
  )
}

//=============================
// Get Default Props
//=============================
const getDefaultProps = () => ({
  backgroundColor: Colors.white.value,
  items: [
    {
      id: uuid(),
      type: BlockNames.FeatureItem,
      props: {
        imageSource: {
          src:
            'https://api.reactbricks.com/images/original/41800240-5e34-11ea-b64f-f36644626031.svg',
          placeholderSrc:
            'https://api.reactbricks.com/images/original/41800240-5e34-11ea-b64f-f36644626031.svg',
          srcSet: '',
        },
        title: Plain.deserialize('A React Brick in the wall'),
        text: Plain.deserialize(
          `We don't need no source control. All in all you are just another React Brick in the wall.`
        ),
      },
    },
  ],
})

//=============================
// Side Edit Props
//=============================
const sideEditProps = [
  {
    name: 'backgroundColor',
    label: 'Background',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Color,
      options: [Colors.white, Colors.lightGray],
    },
  },
]

//=============================
// Exported BlockType Schema
//=============================
const schema = {
  name: BlockNames.Features,
  label: 'Features',
  superType: types.BlockSuperType.Repeater,
  render: props => <Features {...props} />,
  getDefaultProps,
  sideEditProps,
  itemsType: BlockNames.FeatureItem,
  addItemText: 'Add feature',
  removeItemText: 'Remove feature',
}

export default schema
