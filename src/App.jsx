import { useState } from "react";
import Form from "./components/Form";
import Counter from "./components/Counter";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center">
      {!isLoggedIn ? (
        <Form setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
      ) : (
        <Counter userName={userName} />
      )}
    </div>
  );
}


export default App;