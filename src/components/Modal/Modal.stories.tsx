import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalAllProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalAllProps.args = {
  title: "I'm a modal title",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugit numquam reprehenderit excepturi sed voluptatem sunt accusantium, iusto ipsum inventore quae ea exercitationem illo nihil quia. Cum deserunt doloremque perferendis."
};

export const ModalWithTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalWithTitle.args = {
  title: "I'm a modal title"
};

export const ModalWithLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalWithLabel.args = {
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugit numquam reprehenderit excepturi sed voluptatem sunt accusantium, iusto ipsum inventore quae ea exercitationem illo nihil quia. Cum deserunt doloremque perferendis.",
};
