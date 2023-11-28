const LeaderCryptoItem = ({ isFirst, wallet }) => {
    const cardStyle = isFirst ? "leader-card-first" : "leader-card-others";

    return (
        <div className={`leader-card-wrapper ${cardStyle}`}>
            <div className="leader-card-row">
                <div className="row-part">
                    <div className="rank-circle">
                        {wallet.id}
                    </div>
                    <h2>{wallet?.walletName}</h2>
                </div>
                <div className="row-part">
                    <h2>Wallet increase:</h2>
                    <span>{wallet?.walletIncrease} %</span>
                </div>
            </div>
        </div>
    );
};

export default LeaderCryptoItem;
