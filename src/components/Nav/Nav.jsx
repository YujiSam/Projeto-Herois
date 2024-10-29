import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <>
        <header className="flex bg-red-950 text-red-400 items-center uppercase justify-between">
            <h1 className="text-5xl p-10">Herois</h1>
            <nav className="flex gap-5 items-center mr-5 text-xl font-semibold">
                <Link to="/">Home</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/login" className="bg-white text-red-950 rounded-full p-3 pr-7 pl-7">Login</Link>
            </nav>
        </header>
    </>
  )
}
