export default function Header() {
    return (
        <header className="py-4 px-28 bg-black flex items-center text-white">
            <h1 className="text-2xl font-bold"><a href="#todolist">TO DO LIST</a></h1>
            <nav className="ml-20">
                <ul className="">
                    <a className="mr-8" href="#home">Home</a>
                    <a className="mr-8" href="#catalog">Catalog</a>
                    <a className="mr-8" href="#pricing">Pricing</a>
                    <a className="mr-8" href="#about">About</a>
                    <a className="mr-8" href="#contact">Contact</a>
                </ul>
            </nav>
        </header>
    )
}