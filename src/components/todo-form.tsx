import React from 'react'
import { useTodoContextDispatch } from '../context/TodoContext'
import { nanoid } from 'nanoid'
import { TodoProps } from '../types'

function TodoForm({ task, addTask, visible, setVisible }: TodoProps) {

    const dispatch = useTodoContextDispatch()

    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        addTask({
            ...task,
            title: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({
            type: 'ADD-TODO',
            payload: {
                ...task,
                id: nanoid(),
            }
        })
        addTask({
            ...task,
            title: ''
        })
    }


    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({
            type: 'EDIT-TODO', payload: task
        })
        setVisible(false)
        addTask({
            ...task,
            title: ''
        })
    };


    return (
        <form className='w-4/5 mb-5 flex m-auto absolute bottom-0 justify-between' onSubmit={!visible ? handleSubmit : handleEdit}>
            <input className='max-w-4/5 focus:border-transparent focus:ring-0 focus:ring-offset-0 flex-grow py-2 px-2 border-1 rounded-l-lg border-frame bg-transparent' placeholder="what is your task todo?" value={task.title} onChange={handleTaskChange} name='task' />
            <input type='submit' value={`${visible ? 'EDIT' : 'ADD'} TASK`} className=' p-2 focus:border-transparent focus:ring-0 focus:ring-offset-0 bg-frame rounded-r-lg flex-grow max-w-[20%]' />
        </form>
    )
}

export default TodoForm