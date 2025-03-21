

import style from '../Style/Components/ProgressCar.module.scss';
import car from '../Static/svg/car.svg';
import { useEffect, useState } from 'react';

const ProgressCar = () => {

    const [progres, setProgress] = useState<number>(0);


    useEffect(() => {
        const timer = setInterval(() => {
            if (progres != 260) setProgress(progres + 2.5);

          }, 30);
        return () => {
            clearInterval(timer);
          };
    });

    return (
        <>
            <div className={style['ProgressCar']}>
                <div className={style['ProgressCar_wrap']}>
                    <img src={car} style={{marginLeft: `${progres}px`}}/>
                </div>
            </div>
        </>
    );
}
export default ProgressCar;