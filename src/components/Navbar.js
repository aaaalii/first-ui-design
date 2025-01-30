import NavItem from "./NavItem";

export default function Navbar(){

  function handleClick(){
    let sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
  }
  
  return (
    <>
        <div className="navbar-container" id="sidebar">
          <button className="toogle navbar-logo" id="close-btn" onClick={handleClick}>Close</button>
          <img alt="logo" src="navbar-icons/logo.svg" className="navbar-logo mb-40 ml-24" id="logo" width='184px' height='38px' style={{stroke: 'blue'}}/>
          <p className="mb-14 opacity-low ml-24" style={{fontSize: '14px'}}>Select From Menu</p>
          <div className="navitems-container">
            <NavItem text='Home' icon='navbar-icons/home-icon.svg'/>
            <NavItem text='Properties' icon='navbar-icons/buildings-2.svg'/>
            <NavItem text='Payments' icon='navbar-icons/card-pos.svg'/>
            <NavItem text='Documents' icon='navbar-icons/document-text.svg'/>
            <NavItem text='Residents' icon='navbar-icons/building-4.svg'/>
            <NavItem text='Support' icon='navbar-icons/codicon-tools.svg'/>
            <NavItem text='Account Settings' icon='navbar-icons/setting-2.svg' active={true}/>
            <NavItem text='Support' icon='navbar-icons/codicon-tools.svg'/>
            <NavItem text='Support' icon='navbar-icons/codicon-tools.svg'/>
            <NavItem text='Support' icon='navbar-icons/codicon-tools.svg'/>
            <NavItem text='Support' icon='navbar-icons/codicon-tools.svg'/>
            <NavItem text='Support' icon='navbar-icons/codicon-tools.svg'/>
            <NavItem text='Support' icon='navbar-icons/codicon-tools.svg'/>

          </div>
        </div>
    </>
  );
}