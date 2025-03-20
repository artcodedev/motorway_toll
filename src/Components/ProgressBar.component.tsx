

import style from '../Style/Components/Progress.module.scss';

const ProgressBar = () => {
    return (
        <>
            <div className={style['Progress']}>
                <div className={style['Progress_wrap']}>

                    <div className={style['Progress_wrap_pr']}>

                        <div className={style['Progress_wrap_pr_resvis']}>

                            <div className={style['Progress_wrap_pr_resvis_txtStart']}>0%</div>

                            <div className={style['Progress_wrap_pr_resvis_progress']}>

                                <div className={style['Progress_wrap_pr_resvis_progress_active']}></div>

                            </div>

                            <div className={style['Progress_wrap_pr_resvis_txtEnd']}>100%</div>
                        </div>

                        <div className={style['Progress_wrap_pr_res']}>
                            68%
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