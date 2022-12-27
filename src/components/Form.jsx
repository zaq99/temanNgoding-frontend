import Button from "./Button";

const Form = () => {
    return (
        <form
            action=""
            className="mt-16 bg-white p-10 flex flex-col rounded-xl">
            <label htmlFor="" className="mt-4 font-semibold">
                Fotomu
            </label>
            <input type="file" name="photo" />
            <label htmlFor="" className="mt-4 font-semibold">
                Nama
            </label>
            <input
                type="text"
                placeholder="tuliskan namamu ya"
                className="bg-stone-200 p-1 pl-6 rounded-md text-sm"
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Bahasa Pemrograman/ Framework
            </label>
            <input
                type="text"
                placeholder="contoh : PHP"
                className="bg-stone-200 p-1 pl-6 rounded-md text-sm"
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Jenis Error{" "}
            </label>
            <input
                type="text"
                placeholder="masukan code error yang kamu temui"
                className="bg-stone-200 p-1 pl-6 rounded-md text-sm"
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Penyebab
            </label>
            <input
                type="text"
                placeholder="apa penyebabnya menurutmu ?"
                className="bg-stone-200 p-1 pl-6 rounded-md text-sm"
            />
            <label htmlFor="" className="mt-4 font-semibold">
                Solusi
            </label>
            <input
                type="text"
                placeholder="apa solusi yang ingin kamu bagikan"
                className="bg-stone-200 p-1 pl-6 rounded-md text-sm"
            />
            <Button
                text="Kirim"
                className="mt-10 bg-succes-300 hover:bg-succes-400 text-white w-1/6 py-2"
            />
        </form>
    );
};

export default Form;
