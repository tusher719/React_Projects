function Hello() {

    let myName = 'Tusher';
    let number = 523;
    let fullName = () => {
        return 'Mehedi Haasn';
    }

    return <h3>
        MessageNo: {number} I am your master {fullName()}
    </h3>
}

export default Hello;