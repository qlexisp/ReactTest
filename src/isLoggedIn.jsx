export default function IsLoggedIn(propss) {
    return(
        propss.isLoggedIn ? <h2>Welcome back {propss.username}</h2> : <h2>Please log in!</h2>
    );
}

export function List() {
    const fruits = ['Banana', 'Strawberry', 'Cherry', 'Apple', 'Orange'];
    const listFruits = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

    return (
        <ol>{listFruits}</ol>
    );
}

export function Button(button) {
    const handleClick = () => alert('Yes');

    return (
        <button className="bg-green-500 text-white py-2 px-2 rounded" onClick={handleClick}>{button.text}</button>
    );
}