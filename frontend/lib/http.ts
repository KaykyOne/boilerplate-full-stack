import axios from "axios";
import { toast } from "sonner";

function getErrorMessage(error: unknown): string {
    if (!axios.isAxiosError(error)) {
        return "Ocorreu um erro inesperado.";
    }

    const data = error.response?.data;

    if (typeof data?.message === "string") {
        return data.message;
    }

    return "Ocorreu um erro inesperado.";
}

const http = axios.create({
    withCredentials: true,
    withXSRFToken: true,

    headers: {
        Accept: "application/json",
    },
});

http.interceptors.response.use(
    (response) => response,

    (error) => {
        const message = getErrorMessage(error);

        toast.error(message);

        return Promise.reject(error);
    }
);

export default http;