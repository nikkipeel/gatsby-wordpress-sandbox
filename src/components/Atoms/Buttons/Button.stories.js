import React from "react"
import { Button } from "./Button"

export default {
  title: "Design System/Atoms/Buttons",
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
export const Secondary = Template.bind({})
export const Accent = Template.bind({})
export const WithIcon = Template.bind({})

Primary.args = {
  primary: true,
  label: "Primary Button",
  classes: "button button--primary",
}

Secondary.args = {
  primary: false,
  label: "Secondary Button",
  classes: "button button--secondary",
}

Accent.args = {
  primary: false,
  label: "Accent Button",
  classes: "button button--accent",
}

WithIcon.args = {
  primary: false,
  label: "Button With Icon",
  classes: "button button--primary button--with-icon",
}
