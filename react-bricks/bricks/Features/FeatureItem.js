import * as React from 'react'
import classNames from 'classnames'
import { Text, RichText, Image, Plain, types } from 'react-bricks'

import BlockNames from '../BlockNames'

//=============================
// Component to be rendered
//=============================
const FeatureItem = ({
  imageSource,
  title,
  text,
  linkText,
  linkUrl,
  centered,
  onChange,
  ...rest
}) => {
  return (
    <div
      className={classNames('flex flex-row sm:block mb-12 sm:w-5/12 sm:mb-16', {
        'text-center': centered,
      })}
      {...rest}
    >
      <Image
        containerClassName="inline-block"
        imageClassName="block mb-6 w-48 sm:w-auto sm:h-24 pr-4 sm:pr-0"
        source={imageSource}
        alt=""
        propName="imageSource"
        onChange={onChange}
      />

      <div>
        <Text
          renderBlock={props => (
            <h3 className="text-lg sm:text-xl font-extrabold mb-3">
              {props.children}
            </h3>
          )}
          value={title}
          placeholder="Type a title..."
          propName="title"
          onChange={onChange}
        />

        <RichText
          renderBlock={props => (
            <p className="text-gray-600 leading-relaxed mb-3">
              {props.children}
            </p>
          )}
          value={text}
          placeholder="Type a text..."
          propName="text"
          onChange={onChange}
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Link,
          ]}
        />

        {linkText && linkUrl && (
          <p>
            <a href={linkUrl}>{linkText} &raquo;</a>
          </p>
        )}
      </div>
    </div>
  )
}

//=============================
// Get Default Props
//=============================
const getDefaultProps = () => ({
  imageSource: {
    src:
      'https://api.reactbricks.com/images/original/0882c680-5e34-11ea-b64f-f36644626031.svg',
    placeholderSrc:
      'https://api.reactbricks.com/images/original/0882c680-5e34-11ea-b64f-f36644626031.svg',
    srcSet: '',
  },
  title: Plain.deserialize('Another React Brick in the wall'),
  text: Plain.deserialize(
    'We create high performance custom Ecommerce websites for any industry and Booking systems.'
  ),
  linkText: '',
  linkUrl: '',
})

//=============================
// Side Edit Props
//=============================
const sideEditProps = [
  {
    name: 'centered',
    label: 'Centered',
    type: types.SideEditPropType.Boolean,
  },
  {
    name: 'linkText',
    label: 'Link text',
    type: types.SideEditPropType.Text,
  },
  {
    name: 'linkUrl',
    label: 'Link URL',
    type: types.SideEditPropType.Text,
  },
]

//=============================
// Exported BlockType Schema
//=============================
const schema = {
  name: BlockNames.FeatureItem,
  label: 'Feature Item',
  superType: types.BlockSuperType.Single,
  render: props => <FeatureItem {...props} />,
  getDefaultProps,
  sideEditProps,
  textEditProps: ['title', 'text'],
  hideFromAddMenu: true,
}

export default schema
