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
            ket: "Mari berkembang bersama untuk menjadi programmer pemula, dan beri tau yang lain jika ngoding itu mudah dan seru!",
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-6 mt-10 ">
                {cardValue.map((item) => (
                    <div
                        key={item.id}
                        className="about-card p-4 rounded-xl w-full md:w-1/3 mb-10 md:mb-0">
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
