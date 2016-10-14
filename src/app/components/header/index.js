export default {

    data() {
            return {

            };
        },
        mounted() {
            // this.scroll()
            this.$store.dispatch('roll_title', {
                roll: true
            });
        },
        methods: {
            tapclick() {
                this.$store.dispatch('roll_title', {
                    roll: false
                });
            }
        },
        components: {},
};