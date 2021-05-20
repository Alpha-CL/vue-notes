import request from "./request";

export async function getContact() {

	return await request.get("/api/contact");
}
