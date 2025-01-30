import HeroCard from "../Hero/HeroCard/HeroCard";

export default function Hero({heading}){
  return (
    <>
      <div className="hero-container">
        <p className="text-highlight" style={{fontSize: '28px'}}>{heading}</p>
        <HeroCard/>
      </div>
    </>
  );
}