const CryptoItem = ({
                        crypto,
                    }) => {

    return (
            <div className="crypto-card">
                <div className="crypto-icon">
                    <img src="https://incrypto.merku.love/static/media/btc.b3d9fc323741d56a571e6a992ff44b8a.svg" />
                </div>
                <div className="crypto-card-title">
                    <div className="crypto-card-title-row">
                        <h3>{crypto?.name}</h3>
                        <h3>{crypto?.changePercent24Hr}</h3>
                    </div>
                    <div className="crypto-card-title-row">
                        <h2>{crypto?.symbol}</h2>
                        <h2>{crypto?.priceUsd} USD</h2>
                    </div>
                </div>
            </div>
    )
}
export default CryptoItem;