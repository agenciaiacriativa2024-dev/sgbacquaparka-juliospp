// Authentication logic using Firebase
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged as onFirebaseAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from './firebase-config-frontend.js';

/**
 * Attempts to log in a user with email and password.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @returns {Promise<import("https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js").UserCredential>}
 */
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Logs out the current user.
 * @returns {Promise<void>}
 */
export const logout = () => {
    return signOut(auth);
};

/**
 * Sets up a listener for authentication state changes.
 * @param {function(import("https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js").User): void} callback The function to call when the auth state changes.
 */
export const onAuthStateChanged = (callback) => {
    onFirebaseAuthStateChanged(auth, callback);
};

/**
 * Creates a new user with email and password.
 * @param {string} email The new user's email.
 * @param {string} password The new user's password.
 * @returns {Promise<import("https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js").UserCredential>}
 */
export const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
