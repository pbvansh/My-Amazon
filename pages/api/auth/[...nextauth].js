import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/Google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
})

/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAZi0U5hcHy-hJ95K3vd80sYzum9LGHmg",
  authDomain: "my-7b45a.firebaseapp.com",
  projectId: "my-7b45a",
  storageBucket: "my-7b45a.appspot.com",
  messagingSenderId: "895776431796",
  appId: "1:895776431796:web:4aa127bcce6f71f4a081e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/