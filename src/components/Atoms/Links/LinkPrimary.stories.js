import React from "react"
import { LinkPrimary } from "./LinkPrimary"

export default {
  title: "Design System/Atoms/Links/Link",
  component: LinkPrimary,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <LinkPrimary {...args} />

export const Link = Template.bind({})

Link.args = {
  primary: true,
  label: "Link",
}
