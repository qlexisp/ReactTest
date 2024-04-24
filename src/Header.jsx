export default function Header() {
    return (
        <header className="py-6 px-28 bg-black flex items-center text-white">
            <h1 className="text-2xl font-bold">TO DO LIST</h1>
            <nav className="ml-20">
                <ul className="">
                    <a className="mr-8" href="#">Home</a>
                    <a className="mr-8" href="#">Catalog</a>
                    <a className="mr-8" href="#">Pricing</a>
                    <a className="mr-8" href="#">About</a>
                    <a className="mr-8" href="#">Contact</a>
                </ul>
            </nav>
        </header>
    )
}