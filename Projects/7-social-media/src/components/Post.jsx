import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
    const { deletePost } = useContext(PostList);

    return (
        <div className="card post-card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{post.title}</h5>
                    <span onClick={() => deletePost(post.id)}>
                        <RiDeleteBin6Fill className="text-danger" />
                    </span>
                </div>
                <p className="card-text">{post.body}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="badge text-bg-info hashtag"
                            >
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
