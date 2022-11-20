import React from "react";
import Task from './Task'

function TaskList({tasks, handleDeleteClick}) {

  // console.log('from taskList', {categories, tasks})

  const displayTasks = tasks.map(task => {
    return (
      <Task key={task.text} text={task.text} category={task.category} handleDeleteClick={handleDeleteClick}/>
    )
  })

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
