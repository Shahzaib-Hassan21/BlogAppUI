import "./sidebar.css";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error dolores ex libero, </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className=" sidebarIcon fab fa-facebook-square"></i>
           <i className=" sidebarIcon fab fa-twitter-square"></i>
           <i className=" sidebarIcon fab fa-pinterest-square"></i>
           <i className=" sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}

export default SideBar
