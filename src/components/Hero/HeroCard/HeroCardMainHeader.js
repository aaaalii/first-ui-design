export default function HeroCardMainHeader({heading}){
  return (
    <>
      <div className="hero-card-main-header-container">
        <p className="text-highlight" style={{fontSize: '22px'}}>{heading}</p>
        <div className="flex">
          <button className="ml-20 button outline p-8">Export Data</button>
          <button className="ml-20 button p-10 flex"><div style={{marginRight: '10px'}}>+</div>Add Staff</button>
        </div>
      </div>
    </>
  );
}