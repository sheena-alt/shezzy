

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBdJjHpUgvdOtTIAkBMlcpOZ3x53hvV6SM",
  authDomain: "shezzydonuts-e8ab5.firebaseapp.com",
  projectId: "shezzydonuts-e8ab5",
  storageBucket: "shezzydonuts-e8ab5.firebasestorage.app",
  messagingSenderId: "723007165099",
  appId: "1:723007165099:web:71e8b2e6b9642804d21dee",
  measurementId: "G-40WKH23TBT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export async function saveOrder(orderData) {
  try {
   const orderButton = document.getElementById('orderBtn');

orderButton.addEventListener('click', () => {
  const myOrder = {
    item: "Donut",
    price: 10,
    time: new Date()
  };
  
  saveOrder(myOrder); // This runs the code I gave you earlier
});
  }
}
