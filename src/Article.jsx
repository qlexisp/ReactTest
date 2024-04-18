export default function Article(props) {
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.contenu}</p>
        <p>{props.children}</p>
        </>
    )
}