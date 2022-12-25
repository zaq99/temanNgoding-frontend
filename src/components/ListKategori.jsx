import Button from "./Button";

const ListKategori = () => {
    return (
        <div className="mt-4 flex gap-4">
            <Button text="Javascript" className="bg-yellow-200" />
            <Button text="PHP" className="bg-warna-utama-100" />
            <Button text="Phyton" className="bg-blue-200" />
            <Button text="React JS" className="bg-aksen-300" />
        </div>
    );
};

export default ListKategori;
