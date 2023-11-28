import React, { useState, useEffect } from 'react';
import CryptoItem from "./CryptoItem.jsx";
import { getData } from "../../API/crypto.js";

const CryptoCards = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setCryptoData(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {cryptoData.length > 0 ? (
                cryptoData.map((crypto, index) => (
                    <CryptoItem key={index} crypto={crypto} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CryptoCards;
