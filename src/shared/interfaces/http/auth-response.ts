import type { UserInterface } from "@shared/interfaces/user";

export interface AuthResponse {
	user: UserInterface;
	token: string;
	refreshToken: string;
}
