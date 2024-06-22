import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <PostListProvider>
            <div className="app-container d-flex">
                <Sidebar
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
                <div className="content flex-grow-1 d-flex flex-column">
                    <Header />
                    <div className="flex-grow-1 p-3">
                        {selectedTab === "Home" ? <PostList /> : <CreatePost />}
                    </div>
                    <Footer />
                </div>
            </div>
        </PostListProvider>
    );
}

export default App;
