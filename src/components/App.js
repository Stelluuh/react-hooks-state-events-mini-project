import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  function deleteTask(text) {
    const updatedTasks = tasks.filter(task => task.text !== text)
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(
    task => category === "All" || task.category === category
  )

 const addTask = newTask => setTasks([...tasks, newTask])


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={category} 
        onSelectCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={filteredTasks} handleDeleteClick={deleteTask}/>
    </div>
  );
}

export default App;
