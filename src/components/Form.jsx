import axios from "axios";
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(
                "https://temanngoding-backend-production.up.railway.app/data",
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            )
            .then((response) => {
                console.log(response);
                alert(
                    "Terimakasih, Bantuanmu tidak akan pernah aku lupakan :)"
                );
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert("Terjadi kesalahan saat mengirim data!");
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-16 bg-white p-10 flex flex-col rounded-xl">
            <label htmlFor="" className="mt-4 font-semibold">
                Nama
            </label>
            <input
                type="text"
                placeholder="tuliskan namamu ya"
                className="bg-stone-200 p-2 pl-6 rounded-md text-sm"
                name="name"
                required
                onChange={handleChange}
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Bahasa Pemrograman/ Framework
            </label>
            <input
                type="text"
                placeholder="contoh : PHP"
                className="bg-stone-200 p-2 pl-6 rounded-md text-sm"
                name="bahasa"
                required
                onChange={handleChange}
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Jenis Error
            </label>
            <input
                type="text"
                placeholder="masukan code error yang kamu temui"
                className="bg-stone-200 p-2 pl-6 rounded-md text-sm"
                name="error"
                required
                onChange={handleChange}
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Penyebab
            </label>
            <input
                type="text"
                placeholder="apa penyebabnya menurutmu ?"
                className="bg-stone-200 p-2 pl-6 rounded-md text-sm"
                name="penyebab"
                required
                onChange={handleChange}
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Solusi
            </label>
            <input
                type="text"
                placeholder="apa solusi yang ingin kamu bagikan"
                className="bg-stone-200 p-2 pl-6 rounded-md text-sm"
                name="solusi"
                required
                onChange={handleChange}
            />
            <Button
                type="submit"
                text="kirim"
                className="mt-10 bg-succes-300 hover:bg-succes-400 text-white md:w-1/6 py-2"
            />
        </form>
    );
};

export default Form;
