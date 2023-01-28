import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-warna-utama-500 text-white py-2 sticky top-0 z-10">
            <nav className="w-4/5 mx-auto h-14 md:flex justify-between items-center">
                <h4 className="hidden md:flex font-bold">Teman Ngoding.</h4>
                <div className="flex text-sm justify-center items-center gap-10">
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link
                        to="bantu"
                        className="py-2 px-3 bg-succes-100 hover:bg-kuning-200 font-semibold rounded-md text-warna-utama-500">
                        Bantu Teman
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
