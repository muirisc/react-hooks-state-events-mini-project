import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
// const tasks = TASKS;
// const categories = CATEGORIES;

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [list, setList] = useState(TASKS);
  const [categoryTask, setCategoryTask] = useState(list);

  // function handleCategoryChange(event) {
  //   setSelectedCategory(event.target);
  //   event.target.class = "selected";
  // }

  function handleFilter(event)  {
    setSelectedCategory(event.target.value)
    if (event.target.value ==="All") 
      setCategoryTask(list) 
    else {
      let newList = list.filter((task) => {
        if(task.category === event.target.value)
        return true
      })
      setCategoryTask(newList)
  }}


   

  function deleteTask(deletedTask) {
    let newArray = list.filter((task) => {
      if (task.text !== deletedTask){
      return true}})
      setList(newArray)
    
    if (selectedCategory === "All") {
      setCategoryTask(newArray)
    } else {
      let filteredByCategory = newArray.filter((task) => {
        if (task.category === selectedCategory) return true;
      })
      setCategoryTask(filteredByCategory)
    }
  }

  

function onTaskFormSubmit(newTask){
  let newTaskArray = [...list, newTask]
setList(newTaskArray)
if(selectedCategory === "All"){
  setCategoryTask(newTaskArray)

} else {
  let filteredByCategory = newTaskArray.filter( (task) => {
    if(task.category == selectedCategory){
      return true}
    })
setCategoryTask(filteredByCategory);
    }}

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categoryChange={handleFilter}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={categoryTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;



