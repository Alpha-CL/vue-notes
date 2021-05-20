import getCompRootDom from "../getCompRootDom";
import IconFont from "../../components/IconFont/index.vue";
import styles from "./index.module.scss";

/**
 *
 *
 *
 *
 */

export default function (options) {

	const content = options.content || '',
		type = options.type || '',
		duration = options.duration || 2000,
		container = options.duration || document.body;

	const div = document.createElement('div'),
		iconDom = getCompRootDom(IconFont, {type});

	div.innerHTML = `<span>${iconDom.outerHTML}</span><div>${content}</div>`;

	const className = styles[`message-con-${type}`];

	div.className = `${styles['message-con']} ${className}`;

	console.log(div);

	if (options.container) {

		if (getComputedStyle(container).position === 'static') {

			container.style.position = 'relative';
		}
	}

	container.appendChild(div);

	div.clientLeft;

	div.style.opacity = 1;
	div.style.transform = `translate(-50%, -50%)`;

	setTimeout(() => {

		div.style.opacity = 0;
		div.style.transform = `translate(-50%, -50%)`;
		div.addEventListener('transitionend', function () {

			div.remove();
			options.callback && options.callback();

		}, {
			once: true
		});

	}, duration);

}