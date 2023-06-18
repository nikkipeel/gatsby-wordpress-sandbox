import Card from "./Card"

export default {
  title: "Design System/Molecules/Cards",
  component: Card,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <Card {...args} />

export const Basic = Template.bind({})
export const Flip = Template.bind({})

Basic.args = {
  content: "This is some content within a card element",
  classes: "card card--basic",
  title: "Basic Card",
  url: "/",
}

Flip.args = {
  content: "This is some content within a card element",
  classes: "card card--flip",
  title: "Flip Card",
  url: "/",
}
