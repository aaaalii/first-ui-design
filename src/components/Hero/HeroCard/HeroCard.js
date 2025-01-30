import HeroCardSidebar from "../HeroCard/HeroCardSidebar";
import HeroMain from "./HeroCardMain";

export default function HeroCard(){
  return (
    <>
      <div className="hero-card-container">
        <HeroCardSidebar/>
        <HeroMain/>
      </div>
    </>
  );
}