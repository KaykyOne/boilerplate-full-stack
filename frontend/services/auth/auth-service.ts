//* Libraries Imports
import http from "@/lib/http";

//* Types Imports
import type { UserType } from "@/schemas/user";

export type LoginPayload = {
    email: string;
    password: string;
};

export type RegisterPayload = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

type AuthResponse = {
    message: string;
    data: UserType;
};

export async function getCsrfCookie(): Promise<void> {
    await http.get("/sanctum/csrf-cookie");
}

export async function login(
    payload: LoginPayload
): Promise<AuthResponse> {
    await getCsrfCookie();

    const { data } = await http.post<AuthResponse>(
        "/api/login",
        payload
    );

    return data;
}

export async function register(
    payload: RegisterPayload
): Promise<AuthResponse> {
    const { data } = await http.post<AuthResponse>(
        "/api/register",
        payload
    );

    return data;
}

export async function getCurrentUser(): Promise<UserType> {
    const { data } = await http.get<{ data: UserType }>(
        "/api/me"
    );

    return data.data;
}

export async function logout(): Promise<void> {
    await http.post("/api/logout");
}