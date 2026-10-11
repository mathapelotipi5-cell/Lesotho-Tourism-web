import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Attractions from "./Pages/Attraction";
import "./App.css";

function App() {
  const [location, setLocation] = useState(() => ({
    path: window.location.pathname,
    hash: window.location.hash,
  }));

  useEffect(() => {
    const handlePopState = () =>
      setLocation({
        path: window.location.pathname,
        hash: window.location.hash,
      });
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({
      behavior: "smooth",
    });
  }, [location]);

  const navigate = (nextPath) => {
    const nextLocation = new URL(nextPath, window.location.href);
    if (
      nextLocation.pathname === window.location.pathname &&
      nextLocation.hash === window.location.hash
    ) {
      return;
    }
    window.history.pushState({}, "", nextLocation);
    setLocation({ path: nextLocation.pathname, hash: nextLocation.hash });
  };

  return (
    <div className="app">
      <Header onNavigate={navigate} currentPath={location.path} />
      <main>
        {location.path === "/attractions" ? <Attractions /> : <Home />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;