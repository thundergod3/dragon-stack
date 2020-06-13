import axios from "axios";

class HTTPMethod {
	constructor() {
		this.axios = axios;
		this.axios.defaults.baseURL = "http://localhost:8080";
		this.axios.defaults.headers["Content-Type"] = "application/json";
		this.axios.defaults.withCredentials = "include";
	}

	get = (...props) => this.axios.get(...props);

	post = (...props) => this.axios.post(...props);

	put = (...props) => this.axios.put(...props);

	delete = (...props) => this.axios.delete(...props);

	attachTokenHeader = (token) => {
		this.axios.interceptors.request.use(
			function (config) {
				config.headers.Authenrization = token;
				return config;
			},
			function (error) {
				return Promise.reject(error);
			}
		);
	};

	deleteTokenHeader = () => {};
}

export default new HTTPMethod();
