import styles from './assets/ButtonsContainer.module.css';

const ButtonsContainer = () => {
    const buttonsNames = [
        'c', '1', '2', '+', '3', '4', '-',
        '5', '6', '*', '7', '8', '/',
        '=', '9', '0', '.'
    ];

    return (
        <div className={styles.buttonsContainer}>
            {buttonsNames.map(btnsName => (
                <button key={btnsName} className={styles.button}>
                    {btnsName}
                </button>
            ))}
        </div>
    );
};

export default ButtonsContainer;
