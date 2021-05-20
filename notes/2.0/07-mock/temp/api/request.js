import axios from "axios";
import showMessage from "../utils/showMessage"

const axiosIns = axios.create();

// axios interceptors
axiosIns.interceptors.response.use(function (resp) {

	// determine whether the request is normal
	if (resp.data.code !== 0) {
		showMessage({
			content: resp.data.msg,
			type: 'error',
			duration: 2000,
		});
		return null
	}

	return resp.data.data;
});

export default axiosIns;