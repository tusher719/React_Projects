import styles from './assets/ButtonsContainer.module.css';

const ButtonsContainer = ({onButtonClick}) => {
    const buttonsNames = [
        'c', '1', '2', '+', '3', '4', '-',
        '5', '6', '*', '7', '8', '/',
        '=', '9', '0', '.'
    ];

    return (
        <div className={styles.buttonsContainer}>
            {buttonsNames.map(buttonsName => (
                <button key={buttonsName} className={styles.button} onClick={() => onButtonClick(buttonsName)}>
                    {buttonsName}
                </button>
            ))}
        </div>
    );
};

export default ButtonsContainer;
