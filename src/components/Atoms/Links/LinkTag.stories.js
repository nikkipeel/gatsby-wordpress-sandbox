import { LinkTag } from "./LinkTag"

export default {
  title: "Design System/Atoms/Links/Tag",
  component: LinkTag,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <LinkTag {...args} />

export const Tag = Template.bind({})

Tag.args = {
  label: "Tag",
  link: "/",
}
