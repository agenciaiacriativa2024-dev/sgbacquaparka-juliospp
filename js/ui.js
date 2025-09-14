// UI manipulation functions

const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');

/**
 * Hides the dashboard and shows the login screen.
 */
export const showLoginScreen = () => {
    loginScreen.style.display = 'block';
    dashboardScreen.style.display = 'none';
};

/**
 * Hides the login screen and shows the dashboard.
 */
export const showDashboardScreen = () => {
    loginScreen.style.display = 'none';
    dashboardScreen.style.display = 'block';
};

/**
 * Displays a generic error message to the user.
 * @param {string} message The error message to display.
 */
export const showError = (message) => {
    // For now, we'll just use a simple alert.
    // We can make this a nicer modal/toast later.
    alert(message);
};
