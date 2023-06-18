import React from "react"
import { Link } from "./Link"

export default {
  title: "Design System/Atoms/Links",
  component: Link,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <Link {...args} />

export const PrimaryLink = Template.bind({})
export const Tag = Template.bind({})
export const WithIcon = Template.bind({})

PrimaryLink.args = {
  link: "/",
  classes: "link",
  label: "This is a link",
}

Tag.args = {
  link: "/",
  classes: "link link--tag",
  label: "Tag",
}

WithIcon.args = {
  link: "/",
  classes: "link link--with-icon",
  label: "This is a link with an icon",
}
