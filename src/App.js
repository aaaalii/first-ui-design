import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";

export default function App(){
  return(
    <>
      <div className="app">
        <Navbar/>
        <div className="header-and-hero">
          <Header/>
          <Hero heading='Account Settings'/>
        </div>
      </div>
    </>
  );
}