import React from "react"
import { Text } from "./Text"

export default {
  title: "Design System/Atoms/Text",
  component: Text,
}

const Template = args => <Text {...args} />

export const Typography = Template.bind({})

Typography.args = {
  label: "Headings, Body, Blockquote, Captions",
}
