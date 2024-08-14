import TodoForm from './todo-form'
import TodoItem from './todo-item'
import Search from './Search'
import { useTodoContextDispatch, useTodoContextState } from '../context/TodoContext'
import { nanoid } from 'nanoid'
import { EventType, TodoItemType } from '../types'
import { useState } from 'react'
import Filter from './Filter'


function TodoContainer() {
    const state = useTodoContextState()
    const dispatch = useTodoContextDispatch()
    const [filter, setFilter] = useState(false)
    const [filterValue, setFilterValue] = useState('all')
    const [search, setSearch] = useState('')
    const [visible, setVisible] = useState(false)
    const [task, addTask] = useState({
        id: '',
        title: '',
        isCompleted: false,
        category: 'all'
    })
    const todos = state.todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))

    const filteredTodos = todos.filter(todo => filterValue === 'all' || todo.category === filterValue)
    function handleEdit(task: TodoItemType) {
        addTask(task)
        setVisible(true)
    }

    function handleCategoryChange(
        event: EventType, task: TodoItemType) {
        const { name, value } = event.target
        const updatedTodo = { ...task, [name]: value }
        dispatch({ type: 'EDIT-TODO', payload: updatedTodo })
    }


    function handleClick() {
        setFilter(prevFilter => !prevFilter)
    }

    function handleFilter(event: EventType) {
        const { value } = event.target
        setFilterValue(value)
    }

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setSearch(value)
    }

    const taskList = filteredTodos.map((task, index) => {
        return (
            <TodoItem
                key={`${index}-${nanoid()}`}
                {...{ task, index, }}
                handleEdit={() => handleEdit(task)} >
                <Filter
                    value={task.category}
                    handleFilter={(event) => handleCategoryChange(event, task)}
                />
            </TodoItem>
        )
    })
    return (
        <div className='w-1/2 relative flex flex-col  text-white p-4 rounded-lg shadow-lg h-[80vh] bg-todoContainer'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-lg text-frame italic'>Add Your Todos : )</h2>
                <Search handleFilter={() => handleClick()} handleSearch={handleSearch} value={search} />
            </div>

            {filter && <Filter value={filterValue} handleFilter={handleFilter} />}
            {taskList.length > 0 ? taskList : <h2 className='justify-self-center place-items-center'>No Tasks Added</h2>}

            <TodoForm
                task={task}
                addTask={addTask}
                visible={visible}
                setVisible={setVisible}
            />
        </div>
    )
}

export default TodoContainer