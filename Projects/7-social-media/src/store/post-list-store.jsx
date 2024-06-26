import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currntPostList, action) => {
    let newPostList = currntPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currntPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currntPostList];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST
    );

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: "001",
        title: "Hello World!",
        body: "I am a programmer, I have no life!!",
        reactions: "04",
        userId: "user-5",
        tags: ["hello", "life", "coding", "programmer"],
    },
    {
        id: "002",
        title: "result de diya!",
        body: "bosdiwala multimedia and creative department, ",
        reactions: 45,
        userId: "user-7",
        tags: ["mct", "diu", "result"],
    },
    {
        id: "003",
        title: "Hello World!",
        body: "I am a programmer, I have no life!!",
        reactions: "08",
        userId: "user-5",
        tags: ["hello", "life", "coding", "programmer"],
    },
    {
        id: "004",
        title: "result de diya!",
        body: "bosdiwala multimedia and creative department, ",
        reactions: 19,
        userId: "user-7",
        tags: ["mct", "diu", "result"],
    },
    {
        id: "005",
        title: "Hello World!",
        body: "I am a programmer, I have no life!!",
        reactions: 21,
        userId: "user-5",
        tags: ["hello", "life", "coding", "programmer"],
    },
    {
        id: "006",
        title: "result de diya!",
        body: "bosdiwala multimedia and creative department, ",
        reactions: 30,
        userId: "user-7",
        tags: ["mct", "diu", "result"],
    },
];

export default PostListProvider;
