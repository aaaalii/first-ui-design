import HeroCardMainHeader from "./HeroCardMainHeader";
import HeroCardMainRow from "./HeroCardMainRow";

export default function HeroCardMain(){
  return (
    <>
      <div className="hero-card-main-container">
        <HeroCardMainHeader heading='Staff Management'/>
        <div className="p-10 mt-49 hero-card-main-rows-container">
          <HeroCardMainRow/>
          <HeroCardMainRow/>
          <HeroCardMainRow/>
          <HeroCardMainRow/>
          <HeroCardMainRow/>
          <HeroCardMainRow/>
          <HeroCardMainRow/>
        </div>
      </div>
    </>
  );
}