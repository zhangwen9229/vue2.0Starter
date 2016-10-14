/* ============
 * Home Index Page
 * ============
 *
 * The home index page
 */

export default {
	data() {
			return {

			};
		},
		mounted() {},
		methods: {
			tapclick() {
				this.$store.dispatch('roll_title', {
					roll: false
				});
				let self = this;
				setTimeout(function() {
					self.$store.dispatch('roll_title', {
						roll: true
					});
				}, 5000)
			}
		},
		components: {
			vHeader: require('../../../components/indexNav/index.vue')
				// VLayout: require('layouts/default/default.vue'),
				// VPanel: require('components/panel/panel.vue'),
		},
};