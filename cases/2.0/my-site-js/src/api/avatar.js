import request from "./request";

export async function getAvatar() {

	return await request.get("/api/avatar");
}
