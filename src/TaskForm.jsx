import React, { useState } from 'react'
export default function TaskForm() {

    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    function addTask() {
        let newTaskItem = {
            title: newTitle,
            description: newDescription
        }

        let updatedList = [...tasks];
        updatedList.push(newTaskItem);
        setTasks(updatedList);
    }

    function deleteTask() {

    }

    return (
        <div className="px-8">

            <label className="text-white">Enter a task:</label> <br />
            <input
                type="text"
                className="mb-3 mt-1"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)} />
            <br />

            <label className="text-white">Describe your task:</label> <br />
            <textarea
                type="text"
                rows="4"
                cols="22"
                onChange=""
                placeholder="250 characters max"
                className="mb-2 mt-1"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)} />
            <br />

            <button
                onClick={addTask}
                className="text-white py-1 px-2 bg-blue-500 font-bold">Submit
            </button>

            <div id="TaskList" className="bg-gray-600 p-4 my-4">
                {tasks.map((item, index) => (
                    <div className="flex my-4" key={index}>
                        <div className="w-3/4">
                            <h3 className="text-white font-bold text-xl">{item.title}</h3>
                            <p className="text-white">{item.description}</p>
                        </div>
                        <div className="w-1/4 flex justify-center items-center">
                            <button className="bg-red-500 px-2 py-2 text-white font-bold">Delete</button>
                            <button className="bg-blue-500 px-4 py-2 text-white font-bold ml-2 mr-6">Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 