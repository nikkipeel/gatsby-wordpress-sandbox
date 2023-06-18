import React from "react"
import { Colors } from "./Colors"

export default {
  title: "Color Palette",
  component: Colors,
}

const Template = args => <Colors {...args} />

export const ColorPalette = Template.bind({})

ColorPalette.args = {
  label: "Colors",
}
