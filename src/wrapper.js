// Import vue component
import LottieAnimation from './LottieAnimation.vue';

export default {
	install(Vue, options = {}) {
		Vue.component('lottie-animation', LottieAnimation);
	}
};
