import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React from "react";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZlV1PA6C_hx-0GAjM8yiMWKZwAr-2Jvw",
  authDomain: "superchat-8fc13.firebaseapp.com",
  projectId: "superchat-8fc13",
  storageBucket: "superchat-8fc13.appspot.com",
  messagingSenderId: "718831017364",
  appId: "1:718831017364:web:cb6c729a39bb32b1e44381",
  measurementId: "G-53DFMJVVX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => signOut(auth)}>Sign Out</button>
  );
}

function ChatRoom() {
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(q, { idField: 'id' });

  return (
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <SignOut />
    </div>
  );
}

function ChatMessage(props) {
  const { text } = props.message;
  return <p>{text}</p>;
}

export default App;