import Styles from '../components/Container.module.css';

const Container = (props) => {
    return (
        <div className={Styles.container}>{props.children}</div>
    )
}

export default Container;