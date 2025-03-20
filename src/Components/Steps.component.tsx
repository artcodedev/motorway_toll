

import style from '../Style/Components/Steps.module.scss';
import ship from '../Static/svg/ship.svg';

interface Props {
    step: number
    progress: number
}

const Steps = ({...pr}: Props) => {

    return (
        <>
            <div className={style['Steps']}>

                <div className={style['Steps_wrap']}>

                    <div className={style['Steps_wrap_line']}>

                        <div className={style['Steps_wrap_line_wrap']}>
                            <div className={style['Steps_wrap_line_wrap_progress']} style={{width: `${pr.progress}%`}}></div>
                        </div>

                    </div>

                    <div className={style['Steps_wrap_steps']}>


                        {[1, 2, 3].map((e) => {
                            if (pr.step == e) return <div className={style['Steps_wrap_steps_square']}>

                                <div className={style['Steps_wrap_steps_square_value']}>
                                    {e}
                                </div>

                            </div>

                            if (pr.step > e) return <div className={style['Steps_wrap_steps_square']}>

                                <img src={ship} />

                            </div>

                            if (pr.step < e) return <div className={style['Steps_wrap_steps_square_notActiv']}>

                                <div className={style['Steps_wrap_steps_square_value_notActiv']}>
                                    {e}
                                </div>

                            </div>


                        }
                        )}


                    </div>

                </div>

            </div>
        </>
    );
}

export default Steps;