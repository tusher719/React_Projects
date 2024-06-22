import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostList);

    const userIdRef = useRef();
    const postTitleRef = useRef();
    const postBodyRef = useRef();
    const reactionsRef = useRef();
    const tagsRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userId = userIdRef.current.value;
        const postTitle = postTitleRef.current.value;
        const postBody = postBodyRef.current.value;
        const reactions = reactionsRef.current.value;
        const tags = tagsRef.current.value.split(" ");

        userIdRef.current.value = "";
        postTitleRef.current.value = "";
        postBodyRef.current.value = "";
        reactionsRef.current.value = "";
        tagsRef.current.value = "";

        addPost(userId, postTitle, postBody, reactions, tags);
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="mb-3 w-100">
                    <label htmlFor="userId" className="form-label">
                        Enter Your User ID here
                    </label>
                    <input
                        type="text"
                        ref={userIdRef}
                        className="form-control"
                        id="userId"
                        placeholder="Your User ID"
                    />
                </div>
                <div className="mb-3 w-100 px-3">
                    <label htmlFor="reactions" className="form-label">
                        Number of Reactions
                    </label>
                    <input
                        type="number"
                        ref={reactionsRef}
                        className="form-control"
                        id="reactions"
                        placeholder="How many people reacted to this post"
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Post Title
                </label>
                <input
                    type="text"
                    ref={postTitleRef}
                    className="form-control"
                    id="title"
                    placeholder="How are you feeling today..."
                />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">
                    Post Content
                </label>
                <textarea
                    ref={postBodyRef}
                    rows="4"
                    className="form-control"
                    id="body"
                    placeholder="Tell us more about it..."
                />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">
                    Post Tags
                </label>
                <input
                    type="text"
                    ref={tagsRef}
                    className="form-control"
                    id="tags"
                    placeholder="Enter tags separated by spaces"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Post
            </button>
        </form>
    );
};

export default CreatePost;
