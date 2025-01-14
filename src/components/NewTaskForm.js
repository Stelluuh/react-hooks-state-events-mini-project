import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const sansAll = categories.filter(cat => cat !== "All")

  const renderOption = sansAll.map(categoryOp => <option key={categoryOp}>{categoryOp}</option>)

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({ text, category })
    setText("")
    setCategory("Code")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category">
          {renderOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
