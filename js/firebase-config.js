import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmdAtBmNaJAEJEiU6QfoqdwOUa7vhL8dk",
    authDomain: "sgbacquapark-julios.firebaseapp.com",
    projectId: "sgbacquapark-julios",
    storageBucket: "sgbacquapark-julios.firebaseapp.com",
    messagingSenderId: "447883532999",
    appId: "1:447883532999:web:e40cb22f3465538038bce2",
    measurementId: "G-QDYMW2SDMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Placeholder for Asaas API Key - we will use this later
export const asaasApiKey = "YOUR_ASAAS_API_KEY";
