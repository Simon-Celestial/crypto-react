import {CaretDown, CaretUp,} from "@phosphor-icons/react";
import SortingCryptoCards from "./SortingCryptoCards.jsx";

const MiddleColumnContainer = () => {
    return (
        <div className="column-container">
            <div className="crypto-sorting-container">
                <div className="sorting-group">
                    <button className="sorting-button">
                        <p>Name</p>
                        <div className="sorting-arrows">
                            <CaretUp size={8} weight="fill" color="var(--text-dark)"/>
                            <CaretDown size={8} weight="fill" color="var(--text-dark)"/>
                        </div>
                    </button>
                </div>
                <div className="sorting-group">
                    <button className="sorting-button">
                        <p>Price</p>
                        <div className="sorting-arrows">
                            <CaretUp size={8} weight="fill" color="var(--text-dark)"/>
                            <CaretDown size={8} weight="fill" color="var(--text-dark)"/>
                        </div>
                    </button>
                    <button className="sorting-button">
                        <p>Change 24h</p>
                        <div className="sorting-arrows">
                            <CaretUp size={8} weight="fill" color="var(--text-dark)"/>
                            <CaretDown size={8} weight="fill" color="var(--text-dark)"/>
                        </div>
                    </button>
                </div>
            </div>
            <div className="sorting-crypto-cards">
                <SortingCryptoCards />
            </div>

        </div>
    )
}
export default MiddleColumnContainer;