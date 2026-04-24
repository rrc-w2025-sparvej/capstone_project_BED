import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKDbCyEZOnBBLBmTQgSxx-PxP_z2A5OtU",
  authDomain: "food-ordering-api-71ede.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function login() {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    "test@test.com",
    "123456"
  );

  const token = await userCredential.user.getIdToken();
  console.log("TOKEN:", token);
}

login();