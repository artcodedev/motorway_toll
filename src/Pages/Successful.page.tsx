
import Container from "../Components/Container.component";
import MainWrapper from "../Components/MainWrapper.component";
import style from '../Style/Pages/Successful.module.scss';
// import logo_pay from '../Static/svg/logo_pay.svg';
import UIWhatsAppButton from "../Components/UIKit/UIWhatsAppButtton";
import { useStepsStore } from "../Story/story";
import { useEffect } from "react";

declare global { interface Window { ym: any } }

const Successful = ({ status }: { status: boolean }) => {

    useEffect(() => {
        window.ym(99185149, 'reachGoal', '2-paid');
    });

    return (
        <>
            <Container>

                <MainWrapper>

                    <div className={style['SuccessfulFailed']}>
                        <div className={style['SuccessfulFailed_title']}>
                            <div className={style['SuccessfulFailed_title_txt']}>
                                Payment {status ? <span style={{ color: 'rgb(29, 132, 26)' }}>successful!</span> : <span style={{ color: 'rgb(255, 0, 0)' }}>failed!</span>}
                            </div>
                        </div>

                        <div className={style['SuccessfulFailed_info']}>
                            <div className={style['SuccessfulFailed_info_section']} style={{ marginBottom: '20px' }}>
                                We will send you an e-vignette by email within 10–20 minutes.
                            </div>
                        </div>

                        <div className={style['SuccessfulFailed_wrapper']}>

                            <div className={style['SuccessfulFailed_wrapper_section']}>

                                <div className={style['SuccessfulFailed_wrapper_section_info']}>

                                    <div className={style['SuccessfulFailed_wrapper_section_info_title']}>
                                        E-vignette Austria
                                    </div>

                                    <div className={style['SuccessfulFailed_wrapper_section_info_counts']}>
                                        <span>1x</span><span>{useStepsStore.getState().type_price}</span>
                                    </div>

                                    <div className={style['SuccessfulFailed_wrapper_section_info_time']}>

                                        {`${useStepsStore.getState().start_date?.split('-').join('.')} - ${useStepsStore.getState().end_date?.split('-').join('.')} (23:59)`}
                                    </div>

                                </div>

                            </div>

                            <div className={style['SuccessfulFailed_wrapper_section']}>

                                <div className={style['SuccessfulFailed_wrapper_section_info']}>

                                    <div className={style['SuccessfulFailed_wrapper_section_info_licence']}>
                                        Licence plate number:
                                    </div>

                                    <div className={style['SuccessfulFailed_wrapper_section_info_number']}>
                                        <img src={useStepsStore.getState().flag?.toString()} />
                                        <div>({useStepsStore.getState().number_car_prefix}) {useStepsStore.getState().number_car}</div>
                                    </div>

                                </div>

                                <div className={style['SuccessfulFailed_wrapper_section_price']}>
                                    <img src={'svg/logo_pay.svg'} />
                                </div>
                            </div>

                        </div>

                        <div className={style['SuccessfulFailed_info']}>
                            <div className={style['SuccessfulFailed_info_section']}>
                                You don’t need to do anything else. Once you receive the email with details, you can safely drive on toll roads.
                            </div>

                            <div className={style['SuccessfulFailed_info_section']}>
                                If you don’t receive your vignette within 20 minutes, contact us via the support button below.
                            </div>

                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <UIWhatsAppButton />
                        </div>
                    </div>

                </MainWrapper>

            </Container>
        </>
    );
}

export default Successful;