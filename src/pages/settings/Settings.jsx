import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

function Settings() {
    return (
        <div className="settings">
           <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img 
                
                src="https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="" />
                <label htmlFor="fileInput">
                <i class="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file"  id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Shahzaib" />
                <label>Email</label>
                <input type="text" placeholder="shahzaib@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
           </div>
           <SideBar />
        </div>
    )
}

export default Settings
