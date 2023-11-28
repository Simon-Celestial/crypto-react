import React, { useEffect, useState } from "react";
import { getWalletData } from "../../API/crypto.js";
import LeaderCryptoItem from "./LeaderCryptoItem.jsx";

const LeaderCryptoCards = () => {
    const [leadersData, setLeadersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const walletData = await getWalletData();
                setLeadersData(walletData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(leadersData);

    return (
        <>
            {leadersData.length > 0 ? (
                leadersData.map((wallet) => (

                    <LeaderCryptoItem key={wallet.id} wallet={wallet} isFirst={index === 0} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default LeaderCryptoCards;