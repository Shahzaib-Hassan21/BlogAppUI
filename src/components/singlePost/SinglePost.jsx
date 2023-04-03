import "./singlePost.css"

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
                alt="" 
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum, dolor sit amet consectetur 
                    <div className="singlePostEdit">
                    <i className=" singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Shahzaib</b>
                    </span>
                    <span className="singlePostDate"> 1 hour ago</span>
                </div>
                <p className="singlePostDesc"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus est consectetur natus accusamus, qui amet repellat vitae eveniet accusantium harum laborum eaque omnis iusto? Fugiat officia eum praesentium laudantium labore?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus est consectetur natus accusamus, qui amet repellat vitae eveniet accusantium harum laborum eaque omnis iusto? Fugiat officia eum praesentium laudantium labore?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus est consectetur natus accusamus, qui amet repellat vitae eveniet accusantium harum laborum eaque omnis iusto? Fugiat officia eum praesentium laudantium labore?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus est consectetur natus accusamus, qui amet repellat vitae eveniet accusantium harum laborum eaque omnis iusto? Fugiat officia eum praesentium laudantium labore?
                </p>
            </div>
        </div>
    )
}

export default SinglePost
