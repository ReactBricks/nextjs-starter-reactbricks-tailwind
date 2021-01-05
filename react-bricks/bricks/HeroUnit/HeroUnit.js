import React from 'react'
import classNames from 'classnames'
import { Text, RichText, Plain, types } from 'react-bricks'

import BlockNames from '../BlockNames'

//=============================
// Padding enum
//=============================
const Padding = Object.freeze({
  Big: 'BIG',
  Small: 'SMALL',
})

//=============================
// Component to be rendered
//=============================
const HeroUnit = ({ padding }) => {
  return (
    <div
      className={classNames(
        'max-w-xl mx-auto px-6',
        { 'py-12': padding === Padding.Small },
        { 'py-20': padding === Padding.Big }
      )}
    >
      <Text
        renderBlock={(props) => (
          <h1 className="text-3xl sm:text-4xl text-center font-black text-gray-800 leading-tight mb-3">
            {props.children}
          </h1>
        )}
        placeholder="Type a title..."
        propName="title"
      />
      <RichText
        renderBlock={(props) => (
          <p className="text-xl text-center leading-relaxed text-gray-700">
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
          <code className="text-sm py-1 px-2 bg-gray-200 rounded">
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
const getDefaultProps = () => ({
  padding: Padding.Big,
  title: Plain.deserialize('We develop beautiful web applications'),
  text: Plain.deserialize(
    "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations."
  ),
})

//=============================
// Side Edit Props
//=============================
const sideEditProps = [
  {
    name: 'padding',
    label: 'Padding',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: Padding.Big, label: 'Big Padding' },
        { value: Padding.Small, label: 'Small Padding' },
      ],
    },
  },
]

//=============================
// Block Schema
//=============================
HeroUnit.schema = {
  name: BlockNames.HeroUnit,
  label: 'Hero Unit',
  getDefaultProps,
  sideEditProps,
}

export default HeroUnit
