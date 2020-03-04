import React from 'react'
import classNames from 'classnames'
import { Text, RichText, Image, Plain, types } from 'react-bricks'

import BlockNames from '../BlockNames'

//=============================
// Enums
//=============================
const ImageSide = {
  Right: 'RIGHT',
  Left: 'LEFT',
}
const Colors = {
  white: { value: '#fff', label: 'White' },
  lightGray: { value: '#f7fafc', label: 'Light Gray' },
}

//=============================
// Component to be rendered
//=============================
const TextImage = ({
  onChange,
  backgroundColor,
  imageSide,
  imageSource,
  altText,
  title,
  text,
  rounded,
  border,
}) => {
  return (
    <section className="py-12 sm:py-24 px-6" style={{ backgroundColor }}>
      <div
        className={classNames('max-w-4xl mx-auto px-4 sm:flex flex-wrap', {
          'flex-row-reverse': imageSide === ImageSide.Left,
        })}
      >
        <React.Fragment>
          <div
            className={classNames('flex-1', {
              'md:pl-4 lg:pl-16': imageSide === ImageSide.Left,
            })}
          >
            <Text
              renderBlock={props => (
                <h2 className="text-3xl font-extrabold mb-3">
                  {props.children}
                </h2>
              )}
              value={title}
              placeholder="Type a title..."
              propName="title"
              onChange={onChange}
            />
            <RichText
              renderBlock={props => (
                <p className="text-xl leading-relaxed text-gray-700 mb-3">
                  {props.children}
                </p>
              )}
              value={text}
              placeholder="Type a text..."
              propName="text"
              onChange={onChange}
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Highlight,
                types.RichTextFeatures.Link,
              ]}
            />
          </div>
          <div
            className={classNames('flex-1', {
              'md:pl-4 lg:pl-16': imageSide === ImageSide.Right,
            })}
          >
            <Image
              source={imageSource}
              alt={altText}
              propName="imageSource"
              onChange={onChange}
              imageClassName={classNames(
                'mb-8 sm:mb-0',
                {
                  'rounded-lg': rounded,
                },
                {
                  'border border-gray-200': border,
                }
              )}
            />
          </div>
        </React.Fragment>
      </div>
    </section>
  )
}

//=============================
// Get Default Props
//=============================
const getDefaultProps = () => ({
  backgroundColor: Colors.white,
  imageSide: ImageSide.Right,
  imageSource: {
    src:
      'https://api.reactbricks.com/images/original/55498a00-5e32-11ea-b64f-f36644626031.svg',
    placeholderSrc:
      'https://api.reactbricks.com/images/original/55498a00-5e32-11ea-b64f-f36644626031.svg',
    srcSet: '',
  },
  altText: 'You can trust us',
  title: Plain.deserialize('You can trust us'),
  text: Plain.deserialize(
    'We create and host websites since 1997. We saw the Internet grow up as the standards evolved. We have built hundreds of successful web applications and we still have a lot of fun.'
  ),
  rounded: false,
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
  {
    name: 'imageSide',
    label: 'Image on side',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Radio,
      options: [
        { value: ImageSide.Right, label: 'Right' },
        { value: ImageSide.Left, label: 'Left' },
      ],
    },
  },
  {
    name: 'altText',
    label: 'Image Alt Text',
    type: types.SideEditPropType.Text,
  },
  {
    name: 'rounded',
    label: 'Rounded border',
    type: types.SideEditPropType.Boolean,
  },
]

//=============================
// Exported BlockType Schema
//=============================
const schema = {
  name: BlockNames.TextImage,
  label: 'Text-Image',
  superType: types.BlockSuperType.Single,
  render: props => <TextImage {...props} />,
  getDefaultProps,
  sideEditProps,
  textEditProps: ['title', 'text'],
}

export default schema
