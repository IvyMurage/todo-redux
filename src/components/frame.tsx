import TodoContainer from './todo-container'

function Frame() {
    return (
        <div className=' text-sm overflow-hidden flex items-center pt-10 py-10 justify-center h-screen  bg-frame'>
            <TodoContainer />
        </div>
    )
}

export default Frame