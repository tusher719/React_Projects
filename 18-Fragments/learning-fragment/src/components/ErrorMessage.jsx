const ErrorMessage = ({ items }) => {
    return (
      <>
        {items.length === 0 && <h5>I am still hungry.</h5>}
      </>
    );
  };
  
  export default ErrorMessage;
  