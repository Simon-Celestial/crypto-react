import "./WalletComponent.scss";
import {Wallet} from "@phosphor-icons/react";

const WalletComponent = () => {
    return (
        <>
        <div className="wallet-name">
            <Wallet size={32} weight="duotone"/>
            <b>Wallet Cryptocurrency</b>
        </div>
        <div className="wallet-container">
            <div className="wallet-title">
                <p>Total Assets</p>
                <div className="wallet-total">
                    <p>4960.00 </p>
                    <select name="" id="">
                        <option value="USD">USD</option>
                        <option value="EUR ">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="AUD">AUD</option>
                        <option value="CAD">CAD</option>
                    </select>
                </div>
                <span>0.2021551<p>BTC</p></span>
            </div>
            <div className="wallet-image">
                <img src="https://incrypto.merku.love/static/media/wallet.438f370c1c5a7e7244ae.webp"
                     alt="Crypto wallet"/>
            </div>
        </div>
    </>
    )
}
export default WalletComponent;