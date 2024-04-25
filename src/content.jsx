import Inside from './inside.jsx'

export default function Content(props) {

return (
    <>
    <h2 className="text-xl mt-12 mx-28">Utilisation des props:</h2>
    <div className="grid grid-cols-2 mt-4 mx-28 gap-1 text-white">
    <Inside name="John" age="28 years old" nationality="Greece" />
    <Inside name="Doe" age="23 years old" nationality="South Korea" />
    </div>
    </>
)
}