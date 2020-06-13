import HTTPMethod from "./index";

class dragonService {
	constructor() {
		this.HTTPMethod = HTTPMethod;
	}

	fetchDragonNew = () => HTTPMethod.get("/dragon/new").then((res) => res.data);

	fetchGeneration = () => HTTPMethod.get("/generation").then((res) => res.data);

	fetchPublicDragon = () => HTTPMethod.get("/dragon/public-dragons").then((res) => res.data);

	buyDragon = (dragonInfoBuy) => HTTPMethod.post("/dragon/buy", dragonInfoBuy).then((res) => res.data);

	setDragonMate = (dragonMate) => HTTPMethod.post("/dragon/mate", dragonMate).then((res) => res.data);
}

export default new dragonService();
