/**
 * This is a file containing constants for all of the routes we want to be able to go to
 */
export default {
    HOME: '/',
    SETTINGS: '/settings',
    NEW_GROUP: '/new/group',
    REPORT: '/r',
    getReportRoute: reportID => `/r/${reportID}`,
    SET_PASSWORD: '/setpassword/:validateCode',
    NOT_FOUND: '/404',
    SIGN_IN: '/signin',
};
