// FormRadiobox.stories.js

import FormRadiobox from '../path-to-your-component/FormRadiobox.vue'; // Adjust the path accordingly

export default {
  title: 'Components/FormRadiobox',
  component: FormRadiobox,
};

const Template = (args, { argTypes }) => ({
  components: { FormRadiobox },
  props: Object.keys(argTypes),
  template: '<FormRadiobox v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  // your component's default props
};
