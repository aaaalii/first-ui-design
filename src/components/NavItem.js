export default function NavItem({icon, text, active = false, navbar = true, heroSidebarActive = false}){
  let containerClasses = 'navitem-container ' + (active ? 'active' : '') + (navbar && active ? ' mb-14' : 'mb-32');
  let heroSidebarClasses = 'hero-sidebar-item ' + (heroSidebarActive ? 'hero-sidebar-active' : '');
  let pClasses = (active ? 'active ' : navbar ? 'navitem' : heroSidebarClasses);

  let innerContainerClasses = 'flex-between ' + (active ? 'ml-18' : 'ml-24') ;
  return (
    <>
      <div className={containerClasses}>
        {
          active ? <div className="active-bar">
          </div> : null
        }
        <a href="/" className={pClasses}>
          <div className={innerContainerClasses}>
            { icon ? <img alt="" src={icon} width='24px' height='24px' className={active ? '' : 'gray-scale'}/> : '' }
            <p>{text}</p>
          </div>
        </a>
      </div>
    </>
  );
}