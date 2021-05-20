import request from "./request";

export async function getTemp() {

	return await request.get('');
}