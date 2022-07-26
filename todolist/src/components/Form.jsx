import React from "react"

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim())
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()

    if(!inputText) {
      return alert("Fill the input first")
    }

    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000}
    ])

    setInputText("")
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input onChange={inputTextHandler} type="text" value={inputText} className="todo-input" autoFocus />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form