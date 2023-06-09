import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> React & Node </span>
                <span className="headerTitleLg"> Blog </span>
            </div>
            <img className="headerImg"
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
    )
}

export default Header
