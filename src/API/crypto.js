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
        let res = await fetch("../API/wallets.json");
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};