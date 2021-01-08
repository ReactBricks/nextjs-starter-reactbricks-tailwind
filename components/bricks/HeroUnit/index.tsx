import React from 'react'
import { Text, RichText, Plain, types } from 'react-bricks'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const HeroUnit: types.Brick<HeroUnitProps> = ({ padding }) => {
  return (
    <div
      className={`max-w-xl mx-auto px-6 ${
        padding === 'big' ? 'py-20' : 'py-12'
      }`}
    >
      <Text
        renderBlock={(props) => (
          <h1 className="text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3">
            {props.children}
          </h1>
        )}
        placeholder="Type a title..."
        propName="title"
      />
      <RichText
        renderBlock={(props) => (
          <p className="text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100">
            {props.children}
          </p>
        )}
        placeholder="Type a text..."
        propName="text"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Link,
        ]}
        renderCode={(props) => (
          <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
            {props.children}
          </code>
        )}
      />
    </div>
  )
}

//=============================
// Default Props
//=============================
const getDefaultProps = (): HeroUnitProps => ({
  padding: 'big',
  title: Plain.deserialize('This is a custom Hero Unit'),
  text: Plain.deserialize(
    "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations."
  ),
})

//=============================
// Side Edit Props
//=============================
const sideEditProps: (types.ISideEditProp | types.ISideGroup)[] = [
  {
    name: 'padding',
    label: 'Padding',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: 'big', label: 'Big Padding' },
        { value: 'small', label: 'Small Padding' },
      ],
    },
  },
]

//=============================
// Block Schema
//=============================
HeroUnit.schema = {
  name: 'my-hero-unit',
  label: 'Custom Hero Unit',
  getDefaultProps,
  sideEditProps,
}

export default HeroUnit
