import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const Post = ({ post }) => {
    return (
        <div className="card post-card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{post.title}</h5>
                    <RiDeleteBin6Fill className="text-danger" />
                </div>
                <p className="card-text">{post.body}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {post.tags.map((tag) => (
                            <span className="badge text-bg-info hashtag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div>
                        <FaRegHeart />
                        {post.reactions}
                    </div>
                </div>
                <div className="alert alert-success reaction" role="alert">
                    This post has been Reacted by {post.reactions} people.
                </div>
            </div>
        </div>
    );
};

export default Post;
