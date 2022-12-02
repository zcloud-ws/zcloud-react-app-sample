import "./App.css";
import { useEffect, useState } from "react";

const Country = ({ code, name }) => {
  return (
    <div className="country">
      <span>[{code}]</span>
      <span>{name}</span>
    </div>
  );
};

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    if (!countries) {
      fetch(`${process.env.REACT_APP_BACKEND_URL || ""}/countries`)
        .then((res) => res.json())
        .then((res) => {
          setCountries(res);
        });
    }
  }, [countries]);

  if (!countries) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logobranco-2x.png" className="App-logo" alt="logo" />
        <p>Zcloud Sample React App</p>
        <a
          className="App-link"
          href="https://zcloud.ws"
          target="_blank"
          rel="noopener noreferrer"
        >
          zcloud.ws
        </a>
      </header>
      <div className="countries">
        {Object.entries(countries).map(([code, name]) => (
          <Country name={name} code={code} />
        ))}
      </div>
    </div>
  );
}

export default App;
