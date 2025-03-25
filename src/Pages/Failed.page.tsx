import Container from "../Components/Container.component";
import MainWrapper from "../Components/MainWrapper.component";
import UIWhatsAppButton from "../Components/UIKit/UIWhatsAppButtton";
import style from '../Style/Pages/Failed.module.scss';
// import logo_pay from '../Static/svg/logo_pay.svg';
import UIButton from "../Components/UIKit/UIButton.component";
import { useNavigate } from "react-router-dom";



const Failed = () => {

    const navigate = useNavigate();

    const onClickButton = () => navigate('/austria2');

    return (
        <>
            <Container>

                <MainWrapper>

                    <div className={style['Failed']}>
                        <div className={style['Failed_title']}>
                            <div className={style['Failed_title_txt']}>
                                Payment {status ? <span style={{ color: 'rgb(29, 132, 26)' }}>successful!</span> : <span style={{ color: 'rgb(255, 0, 0)' }}>failed!</span>}
                            </div>
                        </div>

                        <div className={style['Failed_info']}>
                            <div className={style['Failed_info_section']} style={{ marginBottom: '20px' }}>

                                Unfortunately, we were unable to process your payment at this time.
                            </div>
                        </div>

                        <div className={style['Failed_info']}>
                            <div className={style['Failed_info_section']}>
                                Please check your payment details and try again. If the issue persists, consider using a different payment method or contacting your bank.
                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <UIWhatsAppButton />
                           
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <UIButton title='Try again' onCLickButton={onClickButton} />
                        </div>

                        <div>

                        </div>
                    </div>

                </MainWrapper>

            </Container>

        </>
    );
}

export default Failed;