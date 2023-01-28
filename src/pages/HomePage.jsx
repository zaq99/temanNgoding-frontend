import { LaptopKuning, Tangan } from "../assets";
import { IconSearch } from "@tabler/icons";
import ListKategori from "../components/ListKategori";
import ListCard from "../components/ListCard";

const HomePage = () => {
    return (
        <>
            <div className="text-white w-4/5 mx-auto flex flex-col-reverse md:flex-row justify-between mt-10 items-center">
                <div>
                    <h1 className="leading-tight font-bold text-display-size">
                        Teman Ngoding.
                    </h1>
                    <p className="mt-14">
                        Apa yang kamu cemaskan dari Error yang hanya sekecil itu
                        ?
                    </p>
                    <p className="mt-2">
                        Yuk Liat bantuan yang diberikan teman ngodingmu disini
                    </p>
                </div>
                <div>
                    <img src={Tangan} alt="" />
                </div>
            </div>
            <div className="rounded-up bg-warna-utama-400 mt-10 pt-10">
                <div className="w-4/5 mx-auto mb-20">
                    <form action="" className="flex items-center">
                        <label
                            htmlFor=""
                            className="mr-4 text-white font-semibold">
                            Search
                        </label>
                        <input
                            type="text"
                            placeholder="salin error kamu disini // contoh : not defind"
                            className="w-full p-2 rounded-left"
                        />
                        <button
                            className="p-2 text-warna-utama-400 bg-kuning-300 hover:bg-kuning-100 rounded-right"
                            type="submit">
                            <IconSearch />
                        </button>
                    </form>
                    <ListKategori />
                    <ListCard />
                </div>
            </div>
        </>
    );
};

export default HomePage;
