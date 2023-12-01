import React, { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmailName, setUserEmailName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");

  useEffect(() => {
    window.otpless = (otplessUser) => {
      // alert(JSON.stringify(otplessUser));
      setUserData(otplessUser);

      const { name, number } = otplessUser.mobile;
      setUserName(name);
      setUserNumber(number);

      const { name: emailName, email } = otplessUser.email; 
      setUserEmailName(emailName);
      setUserEmail(email);
    };
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome, {userEmailName}</h1>

          <h2>User What's App Details</h2>
          <p>Name: {userName}</p>
          <p>What's App Number: {userNumber}</p>

          <br/><br/>

          <h2>User Email Details</h2>
          <p>Name: {userEmailName}</p>
          <p>Email: {userEmail}</p>
        </div>
      ) : (
        <p>Please wait while we retrieve your details...</p>
      )}
    </div>
  );
}

export default App;
