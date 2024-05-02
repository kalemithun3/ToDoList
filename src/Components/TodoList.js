import React, { useState } from 'react';
import TodoListButton from './TodoListButton';
import AddTodoForm from './AddTodoForm';

const TodoList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const addTask = (newTask) => {
        if (editTask) {
            setTasks(tasks.map(task => (task.id === editTask.id ? newTask : task)));
            setEditTask(null);
        } else {
            setTasks([...tasks, { ...newTask, id: Date.now() }]);
        }
    };

    const handleEdit = (task) => {
        setEditTask(task);
    };

    return (
        <div className="bg-indigo-500 flex flex-col items-center justify-center min-h-screen overflow-auto pt-10">
            <div className="bg-sky-200 h-auto w-auto rounded-lg">
                <TodoListButton addTask={addTask}></TodoListButton>

                <div className="bg-slate-50 h-auto w-auto rounded-lg pt-5">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full lg:shadow-md rounded-md overflow-hidden">
                            <thead className="text-sm font-medium text-gray-700 bg-gray-100 uppercase">
                                <tr>
                                    <th className="px-4 py-2 tracking-wider">Task Name</th>
                                    <th className="px-4 py-2 tracking-wider"> Task Description</th>
                                    <th className="px-4 py-2 tracking-wider">Date</th>
                                    <th className="px-4 py-2 tracking-wider">Priority</th>
                                    <th className="px-4 py-2 tracking-wider">Task Status</th>
                                    <th className="px-4 py-2 tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {tasks.map(task => (
                                    <tr key={task.id} className="border-b hover:bg-gray-100">
                                        <td className="px-4 py-4">{task.name}</td>
                                        <td className="px-4 py-4">{task.description}</td>
                                        <td className="px-4 py-4">{task.date}</td>
                                        <td className="px-4 py-4">{task.priority}</td>
                                        <td className="px-4 py-4">{task.status}</td>
                                        <td className="py-4 px-6 border-b border-grey-light space-x-2">
                                            <button
                                                className="text-grey-lighter font-bold py-1 px-3 rounded-3xl text-xs bg-green-500 hover:bg-green-dark"
                                                onClick={() => handleEdit(task)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="text-grey-lighter font-bold py-1 px-3 rounded-3xl text-xs bg-blue-600 hover:bg-blue-dark"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {editTask && <AddTodoForm addTask={addTask} task={editTask} />}
        </div>
    );
}

export default TodoList;
