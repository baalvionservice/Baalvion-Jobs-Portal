
import { apiClient } from "@/lib/apiClient";

export const authServerService = {
    login: (email: string, password: string) => apiClient.post("/auth/login", { email, password }),
    logout: () => apiClient.post("/auth/logout", {}),
    checkSession: () => apiClient.get("/auth/session"),
};
