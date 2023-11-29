import "./WalletComponent.scss";
import { Wallet } from "@phosphor-icons/react";
import { useEffect, useState, useRef } from "react";
import { getMockCryptoData } from "../../API/crypto.js";

const WalletComponent = () => {
    const [mockData, setMockData] = useState([]);
    const [total, setTotal] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const oneBtcPrice = 38.225;
    const initialTotalRef = useRef(total);

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

    useEffect(() => {
        if (mockData.length > 0) {
            let calculatedTotal = 0;
            mockData.forEach((data) => {
                if (!isNaN(data.addPrice)) {
                    calculatedTotal += parseFloat(data.addPrice);
                }
            });
            const exchangeRates = {
                USD: 1,
                EUR: 0.85,
                GBP: 0.74,
                AUD: 1.35,
                CAD: 1.25,
            };
            setTotal(calculatedTotal * exchangeRates[selectedCurrency]);
            initialTotalRef.current = calculatedTotal;
        }
    }, [mockData, selectedCurrency]);

    return (
        <>
            <div className="wallet-name">
                <Wallet size={32} weight="duotone" />
                <b>Wallet Cryptocurrency</b>
            </div>
            <div className="wallet-container">
                <div className="wallet-title">
                    <p>Total Assets</p>
                    <div className="wallet-total">
                        <p>{total.toFixed(2)} </p>
                        <select
                            value={selectedCurrency}
                            onChange={(e) => setSelectedCurrency(e.target.value)}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                        </select>
                    </div>
                    <span>{(oneBtcPrice / initialTotalRef.current).toFixed(7)}<p>BTC</p></span>
                </div>
                <div className="wallet-image">
                    <img
                        src="https://incrypto.merku.love/static/media/wallet.438f370c1c5a7e7244ae.webp"
                        alt="Crypto wallet"
                    />
                </div>
            </div>
        </>
    );
};

export default WalletComponent;
