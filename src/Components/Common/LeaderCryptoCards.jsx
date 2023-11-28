import LeaderCryptoItem from "./LeaderCryptoItem.jsx";
import React, {useEffect, useState} from "react";
import {getData, getWalletData} from "../../API/crypto.js";

const LeaderCryptoCards = () => {
    const [leadersData, setLeadersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWalletData();
                setLeadersData(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {leadersData.length > 0 ? (
                leadersData.map((wallets) => (
                    <LeaderCryptoItem
                        key={id}
                        wallets={wallets}
                        isFirst={index === 0}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}
export default LeaderCryptoCards;