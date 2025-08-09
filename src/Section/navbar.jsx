export default function Navbar() {
    return (
        <nav className="flex justify-end pr-80 pt-20 bg-color-gray-700 position-relative">
            <ul className="flex gap-8 list-none">
                <li><a href="#Portfolio" className="text-white hover:text-violet-400 border-b-2 border-transparent hover:border-violet-400 transition-all duration-500 text-2xl">Home</a></li>
                <li><a href="#hobby" className="text-white hover:text-violet-400 border-b-2 border-transparent hover:border-violet-400 transition-all duration-500 text-2xl">Portfollio</a></li>
                <li><a href="#Contact" className="text-white hover:text-violet-400 border-b-2 border-transparent hover:border-violet-400 transition-all duration-500 text-2xl">Contact</a></li>
            </ul>
        </nav>
    )
}