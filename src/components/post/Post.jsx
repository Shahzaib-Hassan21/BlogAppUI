import "./post.css"

function post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <div className="postInfo">
                <div className="postCats">
                <span className="postCat">Life</span>
                <span className="postCat">Music</span>
                </div>
                <span className="postTitle">
                Lorem ipsum dolor sit amet </span>
            <hr />
            <span className="postDate"> 1 Hour Ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates atque saepe tenetur neque fuga repudiandae non totam omnis impedit architecto officiis temporibus, nam dolore velit consequatur consequuntur dolor. Saepe, sequi?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates atque saepe tenetur neque fuga repudiandae non totam omnis impedit architecto officiis temporibus, nam dolore velit consequatur consequuntur dolor. Saepe, sequi
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates atque saepe tenetur neque fuga repudiandae non totam omnis impedit architecto officiis temporibus, nam dolore velit consequatur consequuntur dolor. Saepe, sequi</p>
        </div>
    )
}

export default post
