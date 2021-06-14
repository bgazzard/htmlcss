import React from 'react';

import { Filedownload } from './Filedownload';

export default {
  title: 'File download',
  component: Filedownload,
};

const Template = (args) => <Filedownload {...args} />;

export const Default = Template.bind({});
Default.args = {
};
