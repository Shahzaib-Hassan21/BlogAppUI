import { Link } from 'react-router-dom'
import './navbar.css'

const navbar = () => {
    const user = false
    return (
        <div className='nav'>
           <div className="topLeft">
           <i className=" topIcon fab fa-facebook-square"></i>
           <i className=" topIcon fab fa-twitter-square"></i>
           <i className=" topIcon fab fa-pinterest-square"></i>
           <i className=" topIcon fab fa-instagram-square"></i>
           </div>
           <div className="topCenter">
               <ul className="topList">
                   <li className="topListItem">
                       <Link className="link" to="/">HOME</Link>
                   </li>
                   <li className="topListItem">
                       <Link className="link" to="/">ABOUT</Link>
                    </li>
                   <li className="topListItem">
                       <Link className="link" to="/">CONTACT</Link>
                    </li>
                   <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                   </li>
                   <li className="topListItem">
                       { user && "LOGOUT"}
                    </li>
               </ul>
           </div>
           <div className="topRight">
               {
                   user ? (
                    <img 
               className="topImg"
               src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" 
               alt="" />
                   ) : (
                       <ul className="topList">
                           <li className="topListItem">
                       <Link className="link" to="/login">LOGIN</Link>
                       </li>
                             <li className="topListItem">
                       <Link className="link" to="/register">REGISTER</Link>
                       </li>
                       </ul>
                   )
               }
               
               <i className=" topSearchIcon fas fa-search"></i>
           </div>
        </div>
    )
}

export default navbar
