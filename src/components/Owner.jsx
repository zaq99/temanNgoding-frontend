import { OwnerPhoto } from "../assets";

const Owner = () => {
    return (
        <div className="mt-48 flex flex-col items-center w-2/3">
            <img
                src={OwnerPhoto}
                alt=""
                className="pict-owner w-24 border-4 border-warna-utama-400 rounded-full absolute"
            />
            <div className="flex flex-col gap-10 text-center p-10 bg-warna-utama-500 rounded-xl pt-20">
                <p>
                    “Saya Berharap platform ini bisa menjadi tempat untuk para
                    programmer untuk terhubung, berkontribusi, dan saling
                    memberi manfaat terutama dalam menghadapi error.”
                </p>
                <p>-Salam hangat, dari aku teman ngodingmu.</p>
            </div>
        </div>
    );
};

export default Owner;
