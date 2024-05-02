import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoListButton = ({ addTask }) => {
    const [showAddTodoForm, setshowAddTodoForm] = useState(false);

    const handleClick = () => {
        setshowAddTodoForm(true);
    };

    const handleAddTask = (newTask) => {
        addTask(newTask);
        setshowAddTodoForm(false);
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center text-black pt-10 ">
                TO-DO LIST
            </h1>
            <div className="flex flex-col lg:flex-row gap-2.5 pt-10 pb-10 lg:pl-16 lg:pr-16 ">
                {!showAddTodoForm && <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " onClick={handleClick}>
                    <span className="relative px-5 lg:px-20 lg:py-3.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add a New To-Do
                    </span>
                </button>}
                {showAddTodoForm && <AddTodoForm addTask={handleAddTask}></AddTodoForm>}
                {!showAddTodoForm && <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 lg:px-20 lg:py-3.5 py-2.5 text-center mb-2 lg:mb-0"
                >
                    All
                </button>
                }
                {!showAddTodoForm &&
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 lg:px-20 lg:py-3.5 py-2.5 text-center mb-2 lg:mb-0"
                    >
                        To-Do
                    </button>
                }
                {!showAddTodoForm &&
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 lg:px-20 lg:py-3.5 py-2.5 text-center"
                    >
                        Completed
                    </button>}
            </div>
        </div>
    )
}

export default TodoListButton;
