import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {},
});

const postListReducer = (currntPostList, action) => {
    let newPostList = currntPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currntPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currntPostList];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now().toString(), // Ensure the ID is a string
                title: postTitle,
                body: postBody,
                reactions: parseInt(reactions, 10), // Ensure reactions is a number
                userId: userId,
                tags: tags,
            },
        });
    };

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: { posts },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId },
        });
    };

    return (
        <PostList.Provider
            value={{ postList, addPost, addInitialPosts, deletePost }}
        >
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
