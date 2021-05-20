import request from "./request";

export async function getVerticalGroupNav() {

	return await request.get("/api/groupnav");
}
