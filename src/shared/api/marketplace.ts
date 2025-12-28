import axios, { type AxiosInstance } from "axios";

export class MarketplaceApiClient {
	private instance: AxiosInstance;
	private isRefreshing = false;

	constructor() {
		this.instance = axios.create({
			baseURL: "",
		});
	}

	getInstance() {
		return this.instance;
	}
}

export const marketplaceApiClient = new MarketplaceApiClient().getInstance();
