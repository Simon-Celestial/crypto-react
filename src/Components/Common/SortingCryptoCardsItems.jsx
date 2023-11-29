import {Star} from "@phosphor-icons/react";

const SortingCryptoCardsItems = (
    {
        crypto,
    }
) => {
    return (
        <div className="sorting-crypto-card">
            <div className="sorting-crypto-card-row">
                <div className="sorting-card-row-group">
                    <Star size={18} color="var(--text-light)"/>
                    <div className="sorting-card-image-block">
                        <div className="sorting-card-image">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                                 alt="Crypto image"/>
                        </div>
                        <div className="sorting-card-title">
                            <h2>{crypto?.name}</h2>
                            <p>{parseFloat(crypto?.priceUsd).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="sorting-card-row-group">
                    <span
                        style={crypto?.changePercent24Hr > 0 ? {background: "green"} : {background: "red"}}>{parseFloat(crypto?.changePercent24Hr).toFixed(2)} %</span>
                </div>
            </div>
        </div>


    )
}
export default SortingCryptoCardsItems;