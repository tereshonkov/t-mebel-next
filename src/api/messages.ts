import api from "./api";

export const getMessages = async () => {
    try {
        const response = await api.get("/messages");
        return response.data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }
}

export const sendMessageApi = async (data: {name: string, phone: string, message: string}) => {
    try {
        const response = await api.post("/messages/send", data);
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
}