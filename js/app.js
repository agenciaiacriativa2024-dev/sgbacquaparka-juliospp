// Main application logic
import { onAuthStateChanged, login, logout, createUser } from './auth.js';
import { showDashboardScreen, showLoginScreen, showError } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const createUserBtn = document.getElementById('create-user-btn');

    // Set up authentication state listener
    onAuthStateChanged(user => {
        if (user) {
            // User is signed in.
            console.log('User is logged in:', user);
            showDashboardScreen();
            // Later, we'll fetch user role and show the correct dashboard.
        } else {
            // User is signed out.
            console.log('User is logged out.');
            showLoginScreen();
        }
    });

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            try {
                await login(email, password);
                // The onAuthStateChanged listener will handle the UI update
            } catch (error) {
                console.error('Login failed:', error);
                showError(`Login failed: ${error.message}`);
            }
        });
    }

    // Handle logout button click
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                await logout();
                // The onAuthStateChanged listener will handle the UI update
            } catch (error) {
                console.error('Logout failed:', error);
                showError(`Logout failed: ${error.message}`);
            }
        });
    }

    // Handle create user button click
    if (createUserBtn) {
        createUserBtn.addEventListener('click', async () => {
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            if (!email || !password) {
                showError('Please enter an email and password to create a user.');
                return;
            }

            try {
                const userCredential = await createUser(email, password);
                console.log('User created:', userCredential.user);
                alert('User created successfully! You can now log in.');
            } catch (error) {
                console.error('User creation failed:', error);
                showError(`User creation failed: ${error.message}`);
            }
        });
    }

    // Handle dashboard button clicks
    const manageUsersBtn = document.getElementById('manage-users-btn');
    const managePassportsBtn = document.getElementById('manage-passports-btn');
    const managePlansBtn = document.getElementById('manage-plans-btn');

    if (manageUsersBtn) {
        manageUsersBtn.addEventListener('click', () => {
            alert('Gerenciar Usuários: Funcionalidade ainda não implementada.');
        });
    }

    if (managePassportsBtn) {
        managePassportsBtn.addEventListener('click', () => {
            alert('Gerenciar Passaportes: Funcionalidade ainda não implementada.');
        });
    }

    if (managePlansBtn) {
        managePlansBtn.addEventListener('click', () => {
            alert('Gerenciar Planos: Funcionalidade ainda não implementada.');
        });
    }
});
