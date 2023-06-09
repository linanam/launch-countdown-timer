import styles from './countdownTimer.module.scss';
import {useEffect, useRef, useState} from "react";
import {ExpiredMessage} from "../ExpiredMessage/ExpiredMessage";
import {CountItem} from "../CountItem/CountItem";

export const CountdownTimer = (props) => {
    const {targetDate} = props;
    const [countDown, setCountDown] = useState(null);
    const [prevCountDown, setPrevCountDown] = useState(null);
    const [isExpired, setIsExpired] = useState(false);

    let timer;

    const secToMS = 1000;
    const minToMS = secToMS * 60;
    const hourToMS = minToMS * 60;
    const dayToMS = hourToMS * 24;
    const labelList = ['days', 'hours', 'minutes', 'seconds'];

    function calculateCountDown() {
        const timeToday = new Date().getTime();
        const timeTarget = new Date(targetDate).getTime();
        const leftTime = timeTarget - timeToday;
        if (leftTime > 0) {
            return {
                days: Math.floor(leftTime / dayToMS),
                hours: Math.floor((leftTime % dayToMS) / hourToMS),
                minutes: Math.floor((leftTime % hourToMS) / minToMS),
                seconds: Math.floor((leftTime % minToMS) / secToMS)
            }
        } else {
            setIsExpired(true);
        }
    }

    useEffect(() => {
        if(!isExpired) {
            let calculateValue;
            timer = setInterval(() => {
                setPrevCountDown(calculateValue);
                calculateValue = calculateCountDown();
                setCountDown(calculateValue);
            }, 500);
        } else {
            clearTimeout(timer);
        }
    }, []);

    if (isExpired) {
        return <ExpiredMessage />
    }
    return (
        <div className={styles.container}>
            {countDown && (
                <>
                    <div className={styles.header}>We're launching soon</div>
                    <div className={styles.timer}>
                        {
                            labelList.map((label) => {
                                const value = countDown[label];
                                const prevValue = (prevCountDown && prevCountDown.hasOwnProperty(label)) ? prevCountDown[label] : null;
                                const additionalClass = (value !== prevValue) ? 'flip' : 'static';
                                return <CountItem label={label} value={value} prevValue={prevValue} additionalClass={additionalClass} key={label} />
                            })
                        }
                    </div>
                </>
            )}

        </div>
    )
}