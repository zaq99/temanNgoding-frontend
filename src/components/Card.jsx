import Profile from "./Profile";

const Card = () => {
    return (
        <div className="bg-white p-5 rounded-lg flex flex-col gap-4">
            <div className="flex gap-2">
                <div className="w-2.5 h-2.5 bg-kuning-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-succes-200 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-danger-300 rounded-full"></div>
            </div>
            <div>
                <h3 className="font-semibold p-1">Tipe Error</h3>
                <pre className="ml-4 bg-stone-100 p-1 text-danger-400">
                    <code>is not found</code>
                </pre>
            </div>
            <div>
                <h3 className="font-semibold p-1">Penyebab</h3>
                <pre className="ml-4 bg-stone-100 p-1">
                    <code>Ada sesuatu yang tidak tersedia di codemu</code>
                </pre>
            </div>
            <div>
                <h3 className="font-semibold p-1">Solusi</h3>
                <pre className="ml-4 bg-stone-100 p-1 text-succes-500">
                    <code>Periksa kembali kodemu secara detail</code>
                </pre>
            </div>
            <Profile />
        </div>
    );
};

export default Card;
