import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const ListCard = () => {
    // const [result, setResult] = useState();
    // let url = "https://63d4cba90e7ae91a00a279a7.mockapi.io/solusi";

    // async function ambilData() {
    //     let response = await fetch(url);
    //     let result = await response.json();

    //     console.log(result);
    //     return result;
    // }
    // ambilData();

    const [solution, setSolution] = useState([]);

    async function getData() {
        try {
            const { data } = await axios.get(
                "https://63d4cba90e7ae91a00a279a7.mockapi.io/solusi"
            );
            setSolution(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="mt-10 flex flex-col gap-3">
            {solution.map((item) => (
                <Card
                    eror={item.eror}
                    name={item.name}
                    bahasa={item.bahasa}
                    penyebab={item.penyebab}
                    solusi={item.solusi}
                />
            ))}
            {/* <Card />
            <Card /> */}
        </div>
    );
};

export default ListCard;
