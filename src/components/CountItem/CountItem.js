import styles from './countItem.module.scss';

export const CountItem = (props) => {
    const {label, value, prevValue, additionalClass} = props;

    function checkDisplayOptions(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

    console.log(label);
    console.log(prevValue);

    return (
        <div className={`${styles.item} ${additionalClass}`}>
            {(prevValue != null) && (
                <div className={styles.container}>
                    <div className={`${styles.value} ${styles.prev}`}><span>{checkDisplayOptions(prevValue)}</span></div>
                    <div className={`${styles.value} ${styles.prev_top} prev_top`}><span>{checkDisplayOptions(prevValue)}</span></div>
                    <div className={`${styles.value} ${styles.next_bot} next_bot`}>
                        <span>{checkDisplayOptions(prevValue)}</span>
                    </div>
                </div>
            )}
            <div className={styles.label}>{label}</div>
        </div>
    )
}