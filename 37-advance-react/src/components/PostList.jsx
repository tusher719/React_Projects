import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        console.log("fetch started");
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                const formattedPosts = data.posts.map((post) => ({
                    ...post,
                    reactions: Object.values(post.reactions || {}).reduce(
                        (a, b) => a + b,
                        0
                    ),
                }));
                addInitialPosts(formattedPosts);
                setFetching(false);
                console.log("fetch returned");
            });
        console.log("fetch ended");
    }, []);

    return (
        <>
            {fetching && <LoadingSpinner />}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            <div className="row">
                {!fetching &&
                    postList.map((post) => (
                        <div key={post.id} className="col-md-3 mb-3">
                            <Post post={post} />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default PostList;
