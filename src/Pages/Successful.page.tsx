import { useNavigate } from "react-router-dom";
import Container from "../Components/Container.component";
import MainWrapper from "../Components/MainWrapper.component";
import UIButton from "../Components/UIKit/UIButton.component";
import style from '../Style/Pages/Successful.module.scss';
import logo_pay from '../Static/svg/logo_pay.svg';


const Successful = ({ status }: { status: boolean }) => {
    const navigate = useNavigate();

    const onClickButton = () => navigate('/');

    return (
        <>
            <Container>

                <MainWrapper>

                    <div className={style['SuccessfulFailed_title']}>
                        <div className={style['SuccessfulFailed_title_txt']}>
                            Payment {status ? <span style={{ color: 'rgb(29, 132, 26)' }}>successful!</span> : <span style={{ color: 'rgb(255, 0, 0)' }}>failed!</span>}
                        </div>
                    </div>

                    <div className={style['SuccessfulFailed_wrapper']}>

                        <div className={style['SuccessfulFailed_wrapper_section']}>

                            <div className={style['SuccessfulFailed_wrapper_section_info']}>

                                <div className={style['SuccessfulFailed_wrapper_section_info_title']}>
                                    E-vignette Austria
                                </div>

                                <div className={style['SuccessfulFailed_wrapper_section_info_counts']}>
                                    <span>1x</span><span>10 days</span>
                                </div>

                                <div className={style['SuccessfulFailed_wrapper_section_info_time']}>
                                    25.03.2025 - 03.04.2025 (23:59)
                                </div>

                            </div>

                            <div className={style['SuccessfulFailed_wrapper_section_price']}>
                                25.5 €
                            </div>
                        </div>

                        <div className={style['SuccessfulFailed_wrapper_section']}>

                            <div className={style['SuccessfulFailed_wrapper_section_info']}>

                                <div className={style['SuccessfulFailed_wrapper_section_info_licence']}>
                                    Licence plate number:
                                </div>

                                <div className={style['SuccessfulFailed_wrapper_section_info_number']}>
                                    <img src='https://flagcdn.com/w40/tn.png' />
                                    <div>(AL) 1231AB1</div>
                                </div>

                            </div>

                            <div className={style['SuccessfulFailed_wrapper_section_price']}>
                                <img src={logo_pay} />
                            </div>
                        </div>

                        <div className={style['SuccessfulFailed_wrapper_section_total']}>
                            <div className={style['SuccessfulFailed_wrapper_section_total_txt']}>Total</div>
                            <div className={style['SuccessfulFailed_wrapper_section_total_price']}>25.5 €</div>
                        </div>

                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <UIButton title='Home' onCLickButton={onClickButton} />
                    </div>

                </MainWrapper>

            </Container>
        </>
    );
}

export default Successful;