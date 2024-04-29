import TaskForm from './TaskForm'
export default function Body() {

    return (
        <>
            <div className="bg-gray-900 flex justify-center items-center h-screen">
                <div className="">
                    <h2 className="text-white font-bold text-2xl py-2 uppercase flex justify-center">My To Do List</h2>
                    <div className="bg-gray-800 py-[15%] flex justify-center items-center">
<TaskForm />
                    </div>
                </div>
            </div>
        </>
    );
}