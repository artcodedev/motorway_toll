

import Container from '../Components/Container.component';
import MainWrapper from '../Components/MainWrapper.component';
import Steps from '../Components/Steps.component';
import TitlesHeader from '../Components/TitlesHeader.component';
import UIButton from '../Components/UIKit/UIButton.component';
import style from '../Style/Pages/Payment.module.scss'
import edit from '../Static/svg/edit.svg';

const Payment = () => {

    const onClickButton = () => { }

    return (
        <>
            <Container>
                {/* <TitlesHeader /> */}

                <MainWrapper>

                    <Steps step={3} progress={100} />

                    <div className={style['Payment_title']}>
                        <div className={style['Payment_title_txt']}>
                            E-vignette registration was successful.
                            Waiting for download.
                        </div>
                    </div>

                    <div className={style['Payment_wrapper']}>

                        <div className={style['Payment_wrapper_section']}>

                            <div className={style['Payment_wrapper_section_info']}>

                                <div className={style['Payment_wrapper_section_info_title']}>
                                    E-vignette Austria
                                </div>

                                <div className={style['Payment_wrapper_section_info_counts']}>
                                    <span>1x</span><span>10 days</span>
                                </div>

                                <div className={style['Payment_wrapper_section_info_time']}>
                                    25.03.2025 - 03.04.2025 (23:59)
                                </div>

                            </div>

                            <div className={style['Payment_wrapper_section_edit']}>
                                <img src={edit} />
                            </div>

                            <div className={style['Payment_wrapper_section_price']}>
                                25.5 €
                            </div>
                        </div>



                        <div className={style['Payment_wrapper_section']}>

                            <div className={style['Payment_wrapper_section_info']}>

                                <div className={style['Payment_wrapper_section_info_licence']}>
                                    Licence plate number:
                                </div>

                                <div className={style['Payment_wrapper_section_info_number']}>
                                    {/* <div>
                                        <img src='https://flagcdn.com/w40/tn.png' />
                                    </div> */}
                                    <img src='https://flagcdn.com/w40/tn.png' />
                                    <div>(AL) 1231AB1</div>
                                </div>

                            </div>

                            <div className={style['Payment_wrapper_section_edit']}>
                                <img src={edit} />
                            </div>

                            <div className={style['Payment_wrapper_section_price']}>
                                25.5 €
                            </div>
                        </div>



                        <div className={style['Payment_wrapper_section_total']}>
                            <div className={style['Payment_wrapper_section_total_txt']}>Total</div>
                            <div className={style['Payment_wrapper_section_total_price']}>25.5 €</div>
                        </div>



                    </div>

                    <div style={{ margin: '32px auto' }}>
                        email
                    </div>

                    <UIButton title='Pay online' onCLickButton={onClickButton} />

                </MainWrapper>

            </Container>
        </>
    );
}

export default Payment;