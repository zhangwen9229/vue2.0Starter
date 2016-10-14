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
            scroll() {
                var info = document.getElementById('info');
                var div = info.getElementsByTagName('div')[0];
                var p = document.getElementsByTagName('h1')[0];
                var p_w = p.offsetWidth;
                var div_w = info.offsetWidth;
                if (div_w > p_w) {
                    return false;
                }
                div.innerHTML += "&nbsp;&nbsp;" + div.innerHTML;

                setInterval(function() {
                    if (p_w <= info.scrollLeft) {
                        info.scrollLeft -= p_w;
                    } else {
                        info.scrollLeft++;
                    }
                }, 30);
            },
            tapclick() {
                this.$store.dispatch('roll_title', {
                    roll: false
                });
            }
        },
        components: {},
};