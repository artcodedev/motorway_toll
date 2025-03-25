

import { useEffect, useState } from 'react';
import style from '../Style/Components/Progress.module.scss';
import { useNavigate } from 'react-router-dom';


const ProgressBar = () => {

    const [progres, setProgress] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            if (progres != 100) setProgress(progres + 1);

            if (progres == 100) navigate('/austria2/payment');

          }, 30);
        return () => {
            clearInterval(timer);
          };
    });

    return (
        <>
            <div className={style['Progress']}>
                <div className={style['Progress_wrap']}>

                    <div className={style['Progress_wrap_pr']}>

                        <div className={style['Progress_wrap_pr_resvis']}>

                            <div className={style['Progress_wrap_pr_resvis_txtStart']}>0%</div>

                            <div className={style['Progress_wrap_pr_resvis_progress']}>

                                <div className={style['Progress_wrap_pr_resvis_progress_active']} style={{width: `${progres}%`}}></div>

                            </div>

                            <div className={style['Progress_wrap_pr_resvis_txtEnd']}>100%</div>
                        </div>

                        <div className={style['Progress_wrap_pr_res']}>
                            {progres} %
                        </div>

                    </div>

                    <div className={style['Progress_wrap_title']}>
                        The registration of the vehicle is in progress...
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProgressBar;