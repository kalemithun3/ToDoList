import React, { useState } from "react";

const AddTodoForm = ({ addTask }) => {
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: "",
        description: "",
        date: "",
        priority: "",
        status: ""
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(formData);
        setFormData({
            id: Date.now(),
            name: "",
            description: "",
            date: "",
            priority: "",
            status: ""
        }); // Reset form after submission
    };

    return (
        <div className="bg-white flex items-center justify-center h-auto w-auto rounded-lg overflow-auto">
            <form onSubmit={handleSubmit}>
                <div>
                    <h2 className="text-2xl font-bold mb-4 pl-2 pt-5">
                        Add a new to-do:
                    </h2>
                </div>
                <div className="mt-8 grid gap-x-28 gap-y-4 grid-cols-3 pl-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-700 block mb-1 font-medium p-1"
                        >
                            Task Name:
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="Enter Task name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="text-sm text-gray-700 block mb-1 font-medium"
                        >
                            Task Description:
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="Enter Task Description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div>
                        <div className="relative inline-flex">
                            <label
                                htmlFor="priority"
                                className="text-sm text-gray-700 block mb-1 font-medium"
                            >
                                Priority:
                                <select
                                    name="priority"
                                    className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 shadow leading-tight focus:outline-none focus:shadow-outline"
                                    value={formData.priority}
                                    onChange={handleChange}
                                >
                                    <option>High Priority</option>
                                    <option>Medium Priority</option>
                                    <option>Low Priority</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative inline-flex">
                            <label
                                htmlFor="status"
                                className="text-sm text-gray-700 block mb-1 font-medium"
                            >
                                Task Status:
                                <select
                                    name="status"
                                    className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option>Open</option>
                                    <option>To Do</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <label
                            htmlFor="date"
                            className="text-sm text-gray-700 block mb-1 font-medium"
                        >
                            Date:
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="flex flex-row gap-5 pb-5">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            type="submit"
                        >
                            Save
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full pl-3"
                            type="button"
                            onClick={() => setFormData({
                                id: Date.now(),
                                name: "",
                                description: "",
                                date: "",
                                priority: "",
                                status: ""
                            })}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTodoForm;
