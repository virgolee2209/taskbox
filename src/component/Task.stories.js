import Task from "./Task";
import React from 'react'

export default {
    component:Task,
    title:'Task'
}

const Template=args=><Task {...args} />;

export const Default= Template.bind({});
Default.args={
    task:{
        id:1,
        title:'test default',
        state:'TASK_STATE_INBOX',
        updateAt:new Date()
    }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_STATE_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_STATE_ARCHIVED',
  },
};

