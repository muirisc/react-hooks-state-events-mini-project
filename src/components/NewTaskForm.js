import React, { useState } from "react";
import App from "./App";

function NewTaskForm( {dropDown, onTaskFormSubmit, categories}) {
  const [text, setText] = useState('')
  const [categorySelect, setCategorySelect] = useState('Code')


  function handleTextInput(event){
    setText(event.target.value)
  }

  function handleCategoryInput(event){
    setCategorySelect(event.target.value)
  }

  function handleSubmitForm(e){
    e.preventDefault();
    onTaskFormSubmit({
      text: text,
      category: categorySelect
    })
  }
  let categoriesSelect = categories.map( (category) => {
    if(category !== "All"){
      return <option key={category} value={category} > {category} </option>
    }})
  
  return (
    <form className="new-task-form" onSubmit={handleSubmitForm}>
      <label>
        Details
        <input onChange={handleTextInput} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryInput}>
          {/* render <option> elements for each category here */}
          {categoriesSelect}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
