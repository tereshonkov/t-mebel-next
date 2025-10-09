import { ReviewsTypes } from "@/types/reviews";
import api from "./api";

export const getReviews = async () => {
    try {
        const response = await api.get("/reviews/not-approved-reviews");
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
}

export const sendReviewApi = async (data: ReviewsTypes) => {
    try {
        const response = await api.post("/reviews/create-review", data);
        return response.data;
    } catch (error) {
        console.error("Error sending review:", error);
        throw error;
    }
}