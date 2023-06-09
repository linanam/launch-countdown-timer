import React from 'react';
import {CountdownTimer} from "./components/CountdownTimer/CoundownTimer";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
      <>
          <CountdownTimer targetDate="Thu Jun 10 2023 10:56:15" />
          <Footer />
      </>
  );
}

export default App;
