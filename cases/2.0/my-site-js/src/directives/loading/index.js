import loadingUrl from "@/assets/svg/loading.svg";
import styles from "./index.module.scss";

export default function (el, binding) {

	const curImg = getLoadingImg(el);

	if (binding.value) {

		if (!curImg) {

			const img = createLoadingImg();

			el.appendChild(img);
		}

	} else {

		if (curImg) {

			curImg.remove();
		}
	}
}


function getLoadingImg(el) {

	return el.querySelector('img[data-role=loading]');
}


function createLoadingImg() {

	const img = document.createElement('img');
	img.dataset.role = 'loading';
	img.src = loadingUrl;
	img.className = styles.loading;

	return img;
}


// export default {
//
// 	bind(el, binding) {
//
// 	},
// 	update(el, binding) {
//
// 	}
// }