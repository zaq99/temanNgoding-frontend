import Profile from "./Profile";

const Card = ({ eror, name, bahasa, penyebab, solusi }) => {
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
                    <code className="whitespace-normal">{eror}</code>
                </pre>
            </div>
            <div>
                <h3 className="font-semibold p-1">Penyebab</h3>
                <pre className="ml-4 bg-stone-100 p-1 overflow-auto">
                    <code className="whitespace-normal">{penyebab}</code>
                </pre>
            </div>
            <div>
                <h3 className="font-semibold p-1">Solusi</h3>
                <pre className="ml-4 bg-stone-100 p-1 text-succes-500">
                    <code className="whitespace-normal">{solusi}</code>
                </pre>
            </div>
            <Profile name={name} bahasa={bahasa} />
        </div>
    );
};

export default Card;
