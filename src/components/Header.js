import { useEffect, useState } from "react";
import Icon from "./Icon";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

export default function Header(){
  
  let [logo, setLogo] = useState(document.getElementById('logo'));
  let [sidebar, setSidebar] = useState(document.getElementById('sidebar'));
  let [closebtn, setClosebtn] = useState(document.getElementById('close-btn'));
  
  function showNavbar(){
    let logo = document.getElementById('logo');
    let sidebar = document.getElementById('sidebar');
    let closebtn = document.getElementById('close-btn');
    console.log('heelo');
    closebtn.style.display = 'inline';
    logo.style.width = '0px';
    sidebar.style.display = 'inline-block';
    sidebar.style.zIndex = '1'
  }

  function normal(){
    let logo = document.getElementById('logo');
    let sidebar = document.getElementById('sidebar');
    let closebtn = document.getElementById('close-btn');
    console.log('heelo 2');
    closebtn.style.display = 'none';
    logo.style.width = '184px';
    sidebar.style.display = 'inline-block';
    sidebar.style.zIndex = '1'
  }

  function revert(){
    let logo = document.getElementById('logo');
    let sidebar = document.getElementById('sidebar');
    let closebtn = document.getElementById('close-btn');
    console.log('heelo 3');
    closebtn.style.display = 'inline';
    logo.style.width = '0px';
    sidebar.style.display = 'none';
    sidebar.style.zIndex = '1'
  }

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 1049) {
          console.log('hi');
          normal();
        } else {
          revert();
        }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: Remove event listener on component unmount
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

  return (
    <>
      <div className="header-container">
        <button onClick={showNavbar} className="toogle">
          <div>options</div>
        </button>
        <SearchBar placeholder='Search for something here...' icon='icons/search-normal.svg'/>
        <div className="header-right-section">
          <div className="header-right-section-icons border-right flex-between">
            <Icon icon='icons/message-question.svg' border={true}/>
            <Icon icon='icons/sms.svg' border={true}/>
            <Icon icon='icons/notification-bing.svg' border={true} dot={true}/>
          </div>
          <UserCard name='Ali Ahmad' position='Full stack' img='Ellipse 1563.png'/>
        </div>
      </div>
    </>
  );
}