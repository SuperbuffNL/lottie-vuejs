// Import vue component
import LottieAnimation from './lottieAnimation.vue';

export default {
	install(Vue, options = {}) {
		Vue.component('lottie-animation', LottieAnimation);
		Vue.mixin({
			mounted() {
				//console.log('lottie-animation installed!')
			}
		})
	}
};