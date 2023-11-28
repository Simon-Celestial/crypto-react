const CryptoItem = ({
                        mock,
                    }) => {

    return (
            <div className="crypto-card">
                <div className="crypto-icon">
                    <img src={mock?.img} />
                </div>
                <div className="crypto-card-title">
                    <div className="crypto-card-title-row">
                        <h3>{mock?.title}</h3>
                        <h3>{mock?.walletPrice}</h3>
                    </div>
                    <div className="crypto-card-title-row">
                        <h2>{mock?.shotTitle}</h2>
                        <h2>{mock?.addPrice} USD</h2>
                    </div>
                </div>
            </div>
    )
}
export default CryptoItem;