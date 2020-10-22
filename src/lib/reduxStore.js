import { createStore } from 'redux';
import {reducer} from '../reducers/taskSlice'

const defaultTasks = [
    { id: 1, title: 'Something', state: 'TASK_STATE_INBOX' },
    { id: 2, title: 'Something more', state: 'TASK_STATE_INBOX' },
    { id: 3, title: 'Something else', state: 'TASK_STATE_INBOX' },
    { id: 4, title: 'Something again', state: 'TASK_STATE_INBOX' },
  ];

export default createStore(reducer, { tasks: defaultTasks });

