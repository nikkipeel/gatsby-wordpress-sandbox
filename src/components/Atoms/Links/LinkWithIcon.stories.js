import { LinkIcon } from "./LinkIcon"

export default {
  title: "Design System/Atoms/Links/With Icon",
  component: LinkIcon,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <LinkIcon {...args} />

export const WithIcon = Template.bind({})

WithIcon.args = {
  primary: false,
  label: "Link With Icon",
}
