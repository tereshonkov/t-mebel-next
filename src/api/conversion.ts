 import api from "./api";
 
export const registerConversion = async () => {
    try {
        const response = await api.post("/conversions/record");
    } catch (error) {
        console.error("Error recording conversion:", error);
        throw error;
    }
}