import React from "react"
import { IconButton } from "./IconButton"

export default {
  title: "Design System/Atoms/Buttons/With Icon",
  component: IconButton,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <IconButton {...args} />

export const WithIcon = Template.bind({})

WithIcon.args = {
  label: "Button With Icon",
  classes: "button button--primary button--with-icon",
}
