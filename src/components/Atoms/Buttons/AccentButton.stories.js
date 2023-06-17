import React from "react"
import { AccentButton } from "./AccentButton"

export default {
  title: "Design System/Atoms/Buttons/Accent",
  component: AccentButton,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <AccentButton {...args} />

export const Accent = Template.bind({})

Accent.args = {
  primary: false,
  label: "Accent Button",
  classes: "button button--accent",
}
