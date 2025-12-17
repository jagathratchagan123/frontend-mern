import { Link } from "react-router"
const Header = () => {
    return <header className="w-full bg-blue-300 p-4">
        <nav className="flex flex-row justify-center gap-4 items-center">
            <Link to='/'>Home</Link>
            <Link to='/products'>products</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/login'>Login</Link>
        </nav>
    </header>
}

export default Header;