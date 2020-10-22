export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
  };


export const reducer = (state, action) => {
    switch (action.type) {
      case actions.ARCHIVE_TASK:
        return taskStateReducer('TASK_STATE_ARCHIVED')(state, action);
      case actions.PIN_TASK:
        return taskStateReducer('TASK_STATE_PINNED')(state, action);
      default:
        return state;
    }
  };

  export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
  export const pinTask = id => ({ type: actions.PIN_TASK, id });

  function taskStateReducer(taskState) {
    return (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, state: taskState } : task
        ),
      };
    };
  }
