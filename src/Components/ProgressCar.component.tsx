

import style from '../Style/Components/ProgressCar.module.scss';
import car from '../Static/svg/car.svg';

const ProgressCar = () => {

    return (
        <>
            <div className={style['ProgressCar']}>
                <div className={style['ProgressCar_wrap']}>
                    <img src={car} />
                </div>
            </div>
        </>
    );
}
export default ProgressCar;