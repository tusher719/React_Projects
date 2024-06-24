const LoadingSpinner = () => {
    return (
        <div className="row">
            {[...Array(16)].map((_, index) => (
                <div key={index} className="col-md-3 mb-3 mt-4">
                    <div className="card" aria-hidden="true">
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <a className="btn btn-primary disabled placeholder col-6"></a>
                            <br />
                            <div className="btn btn-success disabled placeholder mt-2 col-10"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LoadingSpinner;
