import React from "react"
import { SecondaryButton } from "./SecondaryButton"

export default {
  title: "Design System/Atoms/Buttons/Secondary",
  component: SecondaryButton,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <SecondaryButton {...args} />

export const Secondary = Template.bind({})

Secondary.args = {
  primary: false,
  label: "Secondary Button",
  classes: "button button--secondary",
}
