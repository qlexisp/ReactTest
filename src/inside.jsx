export default function Inside(props) {
    return(
        <>
        <div className="p-4 bg-black">
        Name: {props.name} <br/>
        Age: {props.age} <br/>
        Nationality: {props.nationality}
        </div>
        </>
    )
}