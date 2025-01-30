import NavItem from "../../NavItem";

export default function HeroCardSidebar(){
  return (
    <>
      <div className="hero-card-sidebar-container">
        <NavItem text='Profile Info' navbar={false} active={false}/>
        <NavItem text='User Management' navbar={false} active={false} heroSidebarActive={true}/>
        <NavItem text='Notifications' navbar={false} active={false}/>
        <NavItem text='Platform Settings' navbar={false} active={false}/>
        <NavItem text='Security Settings' navbar={false} active={false} heroSidebarActive={true}/>
      </div>
    </>
  );
}