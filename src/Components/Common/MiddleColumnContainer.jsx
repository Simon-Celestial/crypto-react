import { CaretDown, CaretUp } from "@phosphor-icons/react";
import SortingCryptoCards from "./SortingCryptoCards.jsx";
import { useState, useEffect } from "react";
import {getData} from "../../API/crypto.js";

const MiddleColumnContainer = () => {
    const [sortCriteria, setSortCriteria] = useState('priceUsd');
    const [sortOrder, setSortOrder] = useState('desc');
    const [sortingData, setSortingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setSortingData(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSort = (criteria) => {
        if (sortCriteria === criteria) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortCriteria(criteria);
            setSortOrder('asc');
        }
    };

    return (
        <div className="column-container">
            <div className="crypto-sorting-container">
                <div className="sorting-group">
                    <button className="sorting-button" onClick={() => handleSort('name')}>
                        <p>Name</p>
                        <div className="sorting-arrows">
                            <CaretUp size={8} weight="fill" color="var(--text-dark)" />
                            <CaretDown size={8} weight="fill" color="var(--text-dark)" />
                        </div>
                    </button>
                </div>
                <div className="sorting-group">
                    <button className="sorting-button" onClick={() => handleSort('priceUsd')}>
                        <p>Price</p>
                        <div className="sorting-arrows">
                            <CaretUp size={8} weight="fill" color="var(--text-dark)" />
                            <CaretDown size={8} weight="fill" color="var(--text-dark)" />
                        </div>
                    </button>
                    <button className="sorting-button" onClick={() => handleSort('changePercent24Hr')}>
                        <p>Change 24h</p>
                        <div className="sorting-arrows">
                            <CaretUp size={8} weight="fill" color="var(--text-dark)" />
                            <CaretDown size={8} weight="fill" color="var(--text-dark)" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="sorting-crypto-cards">
                <SortingCryptoCards data={sortingData} sortCriteria={sortCriteria} sortOrder={sortOrder} />
            </div>
        </div>
    );
};

export default MiddleColumnContainer;
