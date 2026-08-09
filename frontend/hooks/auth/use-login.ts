//* Libraries Imports
import { useMutation, useQueryClient } from "@tanstack/react-query";

//* Services Imports
import { login } from "@/services/auth/auth-service";

export function useLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: login,

        onSuccess: (response) => {
            queryClient.setQueryData(
                ["auth", "user"],
                response.data
            );
        },
    });
}