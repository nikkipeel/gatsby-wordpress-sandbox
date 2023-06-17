import React from "react"
import { Icons } from "./Icons"

export default {
  title: "Design System/Atoms/Icons",
  component: Icons,
}

const Template = args => <Icons {...args} />

export const SVGIcons = Template.bind({})

SVGIcons.args = {
  label: "SVG icons",
}
