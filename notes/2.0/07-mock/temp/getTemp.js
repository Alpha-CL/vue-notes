import {getTemp} from "./api/temp";

getTemp()
	.then(res => {
		console.log(res);
	});
