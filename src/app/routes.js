/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
    // Home
    {
        path: '/home',
        name: 'home.index',
        component: require('./pages/home/index/index.vue'),

        // If the user needs to be authenticated to view this page
    },

    {
        path: '/',
        redirect: '/home',
    }, {
        path: '/*',
        redirect: '/home',
    },
];