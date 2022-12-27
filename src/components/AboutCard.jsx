import { Roket, Laptop, Playing } from "../assets";

const AboutCard = () => {
    const cardValue = [
        {
            id: 1,
            picture: Roket,
            judul: "Cepat",
            ket: "Dapat dengan mudah menemukan solusi tanpa harus membaca dokumentasi yang panjang",
        },
        {
            id: 2,
            picture: Laptop,
            judul: "Solutif",
            ket: "Fitur saling bantu membuat solusi yang ada bisa lebih dari satu, kemungkinan mendapat solusi lebih besar",
        },
        {
            id: 3,
            picture: Playing,
            judul: "Sinergi",
            ket: "Fitur saling bantu membuat solusi yang ada bisa lebih dari satu, kemungkinan mendapat solusi lebih besar",
        },
    ];

    return (
        <>
            <div className="flex justify-between gap-6 mt-10 ">
                {cardValue.map((item) => (
                    <div
                        key={item.id}
                        className="about-card p-4 rounded-xl w-1/3">
                        <img
                            src={item.picture}
                            alt=""
                            className="w-48 pict-card"
                        />
                        <h5 className="font-semibold mb-2">{item.judul}</h5>
                        <p className="text-sm">{item.ket}</p>
                    </div>
                ))}
                {/* {cardValue.map((item) => (
                    <div key={item.id}>
                        <img src={item.picture} alt="" />
                        <p>{item.judul}</p>
                    </div>
                ))} */}
            </div>
        </>
    );
};

export default AboutCard;
