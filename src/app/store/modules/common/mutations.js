import {
    ROLL_TITLE
} from './../../mutation-types';

export default {
    [ROLL_TITLE](state, payload) {
        if (payload.roll) {
            var info = document.getElementById('info');
            var div = info.getElementsByTagName('div')[0];
            var p = document.getElementsByTagName('h1')[0];
            var p_w = p.offsetWidth;
            var div_w = info.offsetWidth;
            if (div_w > p_w) {
                return false;
            }
            div.innerHTML += "<div style='width:0.4rem;height:100%;display:inline-block;'>&nbsp;</div>"+div.innerHTML;

            state.rollSetInterval = setInterval(function() {
                if (p_w <= info.scrollLeft) {
                    info.scrollLeft -= p_w;
                } else {
                    info.scrollLeft++;
                }
            }, 30);
        } else {
            clearInterval(state.rollSetInterval);
        }
    },
};