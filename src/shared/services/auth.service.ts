import { marketplaceApiClient } from "../api/marketplace";
import type {
	RegisterHttpParams,
	RegisterHttpResponse,
} from "../interfaces/http/register";

export const register = async (userData: RegisterHttpParams) => {
	const { data } = await marketplaceApiClient.post<RegisterHttpResponse>(
		"/auth/register",
		userData,
	);

	return data;
};
