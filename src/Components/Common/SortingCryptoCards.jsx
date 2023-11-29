import SortingCryptoCardsItems from "./SortingCryptoCardsItems.jsx";

const SortingCryptoCards = ({ data, sortCriteria, sortOrder }) => {
    const sortedData = data.slice().sort((a, b) => {
        if (sortCriteria === 'name') {
            const nameA = a[sortCriteria].toUpperCase();
            const nameB = b[sortCriteria].toUpperCase();

            if (sortOrder === 'asc') {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        } else {
            const valueA = parseFloat(a[sortCriteria]);
            const valueB = parseFloat(b[sortCriteria]);

            if (sortOrder === 'asc') {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        }
    });

    return (
        <>
            {sortedData.length > 0 ? (
                sortedData.map((crypto, rank) => (
                    <SortingCryptoCardsItems key={rank} crypto={crypto} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default SortingCryptoCards;
