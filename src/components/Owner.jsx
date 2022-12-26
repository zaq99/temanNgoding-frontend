import { OwnerPhoto } from "../assets";

const Owner = () => {
    return (
        <div className="mt-48 flex flex-col items-center w-2/3">
            <img
                src={OwnerPhoto}
                alt=""
                className="pict-owner w-24 border-4 rounded-full absolute"
            />
            <div className="flex flex-col gap-10 text-center p-10 bg-warna-utama-500 rounded-xl pt-20">
                <p>
                    “Aku Berharap platform ini menjadi tempat untuk para
                    programmer bisa terhubung, berkontribusi, dan saling memberi
                    manfaat terutama dalam menghadapi error.”
                </p>
                <p>-Salam hangat, dari aku teman ngodingmu.</p>
            </div>
        </div>
    );
};

export default Owner;
