const WelcomeMessage = ({ onGetPostsClick }) => {
    return (
        <center>
            <h1 className="wlcMsg">There are no Posts</h1>
            <button
                type="button"
                onClick={onGetPostsClick}
                className="btn btn-info"
            >
                Get Post From Server
            </button>
        </center>
    );
};

export default WelcomeMessage;
