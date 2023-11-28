import "./Main.scss";
import WalletComponent from "../Common/WalletComponent.jsx";
import CryptoItem from "../Common/CryptoItem.jsx";
import CryptoCards from "../Common/CryptoCards.jsx";
import LeaderCryptoCards from "../Common/LeaderCryptoCards.jsx";
import MiddleColumnContainer from "../Common/MiddleColumnContainer.jsx";

const Main = () => {
    return (
        <main className="app-main">
            <div className="main-column left-column">
                <WalletComponent/>
                <div className="crypto-container">
                    <CryptoCards/>
                </div>

            </div>
            <div className="main-column middle-column">
                <MiddleColumnContainer />
            </div>
            <div className="main-column right-column">
                <div className="leader-board-container">
                    <img
                        src="https://incrypto.merku.love/static/media/icon-cup-dark.5b03dc9ae2c27700898328d85af4bd30.svg"
                        alt="icon"/>
                    <h2>Leaderboard</h2>
                </div>
                <div className="leader-cards-container">
                    <LeaderCryptoCards />
                </div>


            </div>
        </main>
    )
}
export default Main;