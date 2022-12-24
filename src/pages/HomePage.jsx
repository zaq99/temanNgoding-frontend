import { Tangan } from "../assets";

const HomePage = () => {
    return (
        <>
            <div className="text-white w-4/5 mx-auto flex justify-between mt-10 items-center">
                <div>
                    <h1 className="leading-tight font-bold text-display-size">
                        Teman Ngoding.
                    </h1>
                    <p className="mt-14">
                        Apa yang kamu cemaskan dari Error yang hanya sekecil itu
                        ?
                    </p>
                </div>
                <div>
                    <img src={Tangan} alt="" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
