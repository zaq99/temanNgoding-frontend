import Card from "../components/Card";
import { AboutPeople, Roket, Playing, Laptop } from "../assets";
import AboutCard from "../components/AboutCard";

const AboutPage = () => {
    // const cardValue = [
    //     { picture: { Roket }, judul: "Cepat", ket: "" },
    //     { picture: { Laptop }, judul: "Solutif", ket: "" },
    //     { picture: { Playing }, judul: "Sinergi", ket: "" },
    // ];

    return (
        <>
            <div className="w-4/5 mx-auto flex justify-center">
                <img src={AboutPeople} alt="" />
            </div>
            <div className="rounded-up bg-warna-utama-400 pt-6 text-white">
                <div className="w-4/5 mx-auto">
                    <h1 className="text-center font-semibold text-4xl p-3">
                        Hallo, Aku adalah Teman Ngoding.
                    </h1>
                    <div className="flex justify-between gap-20 mt-20">
                        <div>
                            <h3 className="text-2xl mb-4 font-semibold">
                                Teman Ngoding ?
                            </h3>
                            <p>
                                Aku dan teman ngodingmu yang lain akan saling
                                bantu dalam mencari solusi dari permasalahan
                                Error yang kamu temui, jadi kamu tidak perlu
                                khawatir lagi, karena kamu sekarang tidak
                                sendirian.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl mb-4 font-semibold">
                                Focus
                            </h3>
                            <p>
                                Berfokus untuk para programmer pemula yang masih
                                awam dalam membaca dokumentasi suatu bahasa,
                                terlebih lagi untuk yang masih kesulitan
                                memahami bahasa inggris
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-center font-semibold text-4xl p-3 mt-20">
                            Kenapa aku bisa membantu ?
                        </h1>
                        <div>
                            <AboutCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
