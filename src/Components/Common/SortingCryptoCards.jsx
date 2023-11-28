import SortingCryptoCardsItems from "./SortingCryptoCardsItems.jsx";
import React, { useEffect, useState } from "react";
import { getData } from "../../API/crypto.js";
import CryptoItem from "./CryptoItem.jsx";

const SortingCryptoCards = () => {
    const [sortingData, setSortingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setSortingData(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {sortingData.length > 0 ? (
                sortingData.map((crypto, rank) => (
                    <SortingCryptoCardsItems key={rank} crypto={crypto} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default SortingCryptoCards;
