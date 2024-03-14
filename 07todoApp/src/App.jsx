import React from 'react'

const App = () => {

  const [todo, setTodo] = React.useState('')
  const [todos, setTodos] = React.useState([])
  const [error, setError] = React.useState('')


  const inputChange = (e) => {
    setTodo(e.target.value)
  }
  const addTodo = () => {

    if (todo.length == 0) {
      return setError('required')
    } else {
      setError('')
      setTodos([...todos, { text: todo, isCompleted: false }])
      setTodo('')
    }

  }
  const toggleCompleted = (i) => {
    setTodos((prev) => {
      return prev.map((item, index) => {
        return index === i ? {
          ...item, isCompleted: !item.isCompleted
        } : item;
      })
    })
  }

  const deleteHandler = (item) => {
    setTodos(todos.filter((todo) => todo != item))
  }
  const editHandler = (index) => {
    setTodo(todos[index].text)
  }

  return (
    <>
      <div className='main h-screen w-full flex justify-center items-center bg-teal-950'>
        <div className='card p-5 w-96 bg-white rounded flex flex-col gap-5'>
          <div className="">
            <div className='flex gap-4 justify-between'>
              <input
                type="text"
                className="w-full border rounded bg-slate-50 px-3 py-1 "
                placeholder="New item...."
                value={todo}
                onChange={inputChange}
                required
              />
              <button
                className="px-3 py-2 bg-teal-950 text-white rounded"
                onClick={addTodo}
              >Add</button></div>
            <div>
              <span className={error.length > 1 ? 'text-sm text-red-500 ms-4' : null}>{error}</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-teal-950 mb-4">Todo list</h1>
            <ul className="ms-4">
              {todos.map((item, i) =>
              (<li key={i} className="flex items-center gap-2 mb-3">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={() => toggleCompleted(i)}
                  checked={item.isCompleted}

                />
                <span className={item.isCompleted ? 'line-through text-neutral-500' : null}>{item.text}</span>
                <button onClick={() => editHandler(i)} className="px-2 text-green-500 border border-green-500 rounded-full font-bold">Edit</button>
                <button onClick={() => deleteHandler(item)} className="px-2 text-red-500 border border-red-500 rounded-full font-bold">X</button>
              </li>
              )
              )}


            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App