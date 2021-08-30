import React from 'react';
import { useEffect, useState } from 'react';


export default function Timer(props) {
    const { initialMinute = '10', initialSeconds = '30' } = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }

            }
            if (seconds === 0 && minutes === 0) {
                clearInterval(myInterval)
            }

        }, 1000)

        return () => {
            clearInterval(myInterval);

        };
    });

    return (
        <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}

        </div>
    )

}


