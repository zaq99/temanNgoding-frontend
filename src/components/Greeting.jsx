import { Happy } from "../assets";

const Greeting = () => {
    return (
        <>
            <div className="p-4 rounded-xl bg-yellow-200 flex md:hidden">
                <p className="text-xs font-semibold">
                    Hay, Aku tau kamu adalah teman yang baik. senang bertemu
                    denganmu...
                </p>
            </div>
            <div className="p-6 rounded-xl bg-yellow-200 h-40 md:h-36 flex items-center justify-around">
                <h1 className="w-2/3 font-semibold hidden md:flex md:text-xl text-warna-utama-500">
                    Hay, Aku tau kamu adalah teman yang baik. senang bertemu
                    denganmu...
                </h1>
                <img className="mt-20 relative" src={Happy} alt="" />
            </div>
        </>
    );
};

export default Greeting;
