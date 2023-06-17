import FlipCard from "./FlipCard"

export default {
  title: "Design System/Molecules/Cards/Flip",
  component: FlipCard,
  decorators: [
    Story => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <FlipCard {...args} />

export const Flip = Template.bind({})

Flip.args = {
  classes: "card card--trip",
  label: "Flip Card",
  url: "/",
}
