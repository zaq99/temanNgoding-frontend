import axios from "axios";
import { useState } from "react";
import Button from "./Button";

const Form = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(
                "https://63d4cba90e7ae91a00a279a7.mockapi.io/solusi",
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
                // setFormData({});
                // history.push("/");
                // window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                alert("Terjadi kesalahan saat mengirim data!");
            });
    };

    return (
        <form
            // encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="mt-16 bg-white p-10 flex flex-col rounded-xl">
            {/* <label htmlFor="" className="mt-4 font-semibold">
                Fotomu
            </label>
            <input type="file" name="foto" onChange={handleChange} /> */}
            <label htmlFor="" className="mt-4 font-semibold">
                Nama
            </label>
            <input
                type="text"
                placeholder="tuliskan namamu ya"
                className="bg-stone-200 p-2 pl-6 rounded-md text-sm"
                name="name"
                required
                // value={formData.name}
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
                // value={formData.bahasa}
                onChange={handleChange}
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Jenis Error{" "}
            </label>
            <input
                type="text"
                placeholder="masukan code error yang kamu temui"
                className="bg-stone-200 p-2 pl-6 rounded-md text-sm"
                name="eror"
                required
                // value={formData.eror}
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
                // value={formData.penyebab}
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
                // value={formData.solusi}
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
