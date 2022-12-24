import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-warna-utama-500 text-white py-2">
            <nav className="w-4/5 mx-auto h-14 flex justify-between items-center">
                <h4 className="font-bold">Teman Ngoding.</h4>
                <div className="flex items-center gap-10">
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
