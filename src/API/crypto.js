export const getData = async () => {
    try {
        let res = await fetch(`https://api.coincap.io/v2/assets`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
export const getWalletData = async () => {
    try {
        return (await fetch("wallets.json").then((res) => res.json()))?.wallets || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
export const getMockCryptoData = async () => {
    try {
        return (await fetch("mockCrypto.json").then((res) => res.json()))?.mockCrypto || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};