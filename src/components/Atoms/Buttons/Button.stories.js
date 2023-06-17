import React from "react"
import { Button } from "./Button"

export default {
  title: "Design System/Atoms/Buttons/Primary",
  component: Button,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  label: "Primary Button",
  classes: "button button--primary",
}
