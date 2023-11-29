import React, { useState, useEffect } from 'react';
import CryptoItem from "./CryptoItem.jsx";
import {getData, getMockCryptoData, getWalletData} from "../../API/crypto.js";

const CryptoCards = () => {
    const [mockData, setMockData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getMockCryptoData();
                setMockData(fetchedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {mockData.length > 0 ? (
                mockData.map((mock,) => (
                    <CryptoItem key={mock.id} mock={mock} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CryptoCards;
