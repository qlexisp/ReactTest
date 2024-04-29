export default function TaskForm() {

    return (
        <div className="px-8">
            <label className="text-white">Enter a date:</label> <br />
            <input type="date" onChange="" className="mb-3 mt-1" />
            <br />
            <label className="text-white">Enter a task:</label> <br />
            <input type="text" onChange="" className="mb-3 mt-1" />
            <br />
            <label className="text-white">Describe your task:</label> <br />
            <textarea type="text" rows="4" cols="22" onChange="" placeholder="250 characters max" className="mb-2 mt-1" />
            <br />
            <button onClick="" className="text-white py-1 px-2 bg-blue-500">Submit</button>
        </div>
    );
}