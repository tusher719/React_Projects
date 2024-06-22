import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
    const { postList } = useContext(PostListData);
    return (
        <>
            <div className="row">
                {postList.map((post) => (
                    <div key={post.id} className="col-md-3 mb-3">
                        <Post post={post} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PostList;
