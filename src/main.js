// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as App from './app';

require('./bootstrap');

new Vue(App).$mount('#app');
