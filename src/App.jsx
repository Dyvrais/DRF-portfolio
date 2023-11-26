import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toogleMode = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <main className={`main-container ${darkTheme ? "dark" : "bg-white"}`}>
      <Header darkTheme={darkTheme} toogleMode={toogleMode} />
      <article className="fullbody w-full m-auto">
        <Content />
        <Footer />
      </article>
    </main>
  );
}

export default App;
