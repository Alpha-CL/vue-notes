import request from "./request";

export async function getMenus() {

	return await request.get("/api/menus");
}
