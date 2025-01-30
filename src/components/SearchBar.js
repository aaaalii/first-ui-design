export default function SearchBar({placeholder, icon}){
  return (
    <>
      <div className="searchbar-container">
        <input type="text" placeholder={placeholder} className="searchbar-input" style={{width: '100%'}}/>
        <img alt="" src={icon} width='20px' height='20px'/>
      </div>
    </>
  );
}