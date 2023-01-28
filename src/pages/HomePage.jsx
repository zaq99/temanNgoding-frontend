import { Tangan } from "../assets";
import { IconSearch } from "@tabler/icons";
import ListKategori from "../components/ListKategori";
import ListCard from "../components/ListCard";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios
            .get("https://63d4cba90e7ae91a00a279a7.mockapi.io/solusi")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    useEffect(() => {
        setFilteredData(
            data.filter((data) =>
                data.eror.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, data]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <div className="text-white w-4/5 mx-auto flex flex-col-reverse md:flex-row justify-between mt-10 items-center">
                <div>
                    <h1 className="leading-tight font-bold text-3xl text-center xl:text-left mt-4 md:mt-0 md:text-center md:text-display-size">
                        Teman Ngoding.
                    </h1>
                    <p className="mt-14 text-center md:text-left">
                        Apa yang kamu cemaskan dari Error yang hanya{" "}
                        <strong>sekecil</strong> itu ?
                    </p>
                    <p className="mt-2 text-center md:text-left">
                        Yuk Liat bantuan yang diberikan teman ngodingmu disini
                    </p>
                </div>
                <div>
                    <img src={Tangan} alt="" />
                </div>
            </div>
            <div className="rounded-up bg-warna-utama-400 mt-10 pt-10">
                <div className="w-4/5 mx-auto mb-20">
                    <form className="flex items-center">
                        <label
                            htmlFor=""
                            className="mr-4 text-white font-semibold">
                            Search
                        </label>
                        <input
                            type="text"
                            placeholder="salin error kamu disini // contoh : not defind"
                            onChange={handleChange}
                            className="w-full p-2 rounded-left"
                        />
                        <button
                            className="p-2 text-warna-utama-400 bg-kuning-300 hover:bg-kuning-100 rounded-right"
                            type="submit">
                            <IconSearch />
                        </button>
                    </form>
                    {/* {filteredData.map((data) => (
                        <div key={data.id}>
                            <p>{data.eror}</p>
                        </div>
                    ))} */}
                    <ListKategori />
                    <ListCard data={filteredData} />
                </div>
            </div>
        </>
    );
};

export default HomePage;
