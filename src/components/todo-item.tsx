import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoItemProps } from "../types";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useTodoContextDispatch } from "../context/TodoContext";

export default function TodoItem({ task, handleEdit, children }: TodoItemProps) {
    const dispatch = useTodoContextDispatch()

    function handeDelete(todoId: string) {
        dispatch({ type: 'DELETE-TODO', payload: todoId })
    }


    return (
        <div className='grid grid-cols-4 place-items-stretch justify-between p-2  items-center bg-todoItem'>
            <p className=" col-span-2">{task.title}</p>
            <div className="place-self-center">
                {children}

            </div>
            <div className="col-span-1 place-self-end">
                <button onClick={() => handleEdit(task)} className="w-8 h-8 m-2 rounded-lg border-1 border-frame">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => handeDelete(task.id)} className='bg-frame m-2 w-8 h-8 p-1 rounded-lg'>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>)
}

