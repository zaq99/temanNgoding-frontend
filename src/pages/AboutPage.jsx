import Card from "../components/Card";
import { AboutPeople, Roket, Playing, Laptop } from "../assets";
import AboutCard from "../components/AboutCard";
import Owner from "../components/Owner";

const AboutPage = () => {
    return (
        <>
            <div className="w-4/5 mx-auto flex justify-center">
                <img src={AboutPeople} alt="" />
            </div>
            <div className="rounded-up bg-warna-utama-400 pt-6 text-white pb-48">
                <div className="w-4/5 mx-auto">
                    <h1 className="text-center font-semibold text-2xl md:text-4xl p-3">
                        Hallo, Aku adalah Teman Ngoding.
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between gap-20 mt-20">
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
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-2xl mb-4 font-semibold">
                                Pemula
                            </h3>
                            <p>
                                Untuk kamu programmer pemula yang masih awam
                                dalam membaca dokumentasi suatu bahasa, terlebih
                                lagi masih kesulitan memahami bahasa inggris,
                                aku adalah teman yang cocok untukmu
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-center font-semibold text-2xl md:text-4xl p-3 mt-40">
                            Kenapa aku bisa membantu ?
                        </h1>

                        <AboutCard />
                        <div className="flex justify-center">
                            <Owner />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
