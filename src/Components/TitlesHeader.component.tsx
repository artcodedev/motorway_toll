

import style from '../Style/Components/TitlesHeader.module.scss';
// import austria_flag from '../Static/svg/austria.svg';

const TitlesHeader = () => {
    return (
        <>
            <div className={style['TitlesHeader']}>
                <div className={style['TitlesHeader_wrap']}>

                    <div className={style['TitlesHeader_wrap_uTxt']}>

                        <div className={style['TitlesHeader_wrap_uTxt_wrapU']}>Toll payment</div>

                        <div className={style['TitlesHeader_wrap_uTxt_wrapD']}>

                            <div className={style['TitlesHeader_wrap_uTxt_wrapD_flag']}>

                                <img src={`${window.location.origin}/austria2/svg/austria.svg`} />

                            </div>

                            <div className={style['TitlesHeader_wrap_uTxt_wrapD_title']}>Austria - 2025</div>

                        </div>

                        <div className={style['TitlesHeader_wrap_uTxt_wrapP']}>
                            <div className={style['TitlesHeader_wrap_uTxt_wrapP_uText']}>
                                Online Vignette
                            </div>

                            <div className={style['TitlesHeader_wrap_uTxt_wrapP_dText']}>
                                To calculate the price of the E-vignette, please provide the following information:
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default TitlesHeader;