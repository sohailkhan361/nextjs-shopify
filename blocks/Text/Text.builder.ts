import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

const Text = dynamic(
  () => import(`blocks/Text/Text`),
  { ssr: true }
)

Builder.registerComponent(Text, {
    name: 'Text Element',
    inputs: [
        {
            name: 'headline',
            type: 'string',
            defaultValue: 'This is my text element text'
        },
        {
            name: 'description',
            type: 'string',
            defaultValue: 'Lorem ipsum blah blah blah'
        }
    ]
})