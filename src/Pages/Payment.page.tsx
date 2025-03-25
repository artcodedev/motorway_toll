

import Container from '../Components/Container.component';
import MainWrapper from '../Components/MainWrapper.component';
import Steps from '../Components/Steps.component';
// import TitlesHeader from '../Components/TitlesHeader.component';
import UIButton from '../Components/UIKit/UIButton.component';
import style from '../Style/Pages/Payment.module.scss'
import edit from '../Static/svg/edit.svg';
import logo_pay from '../Static/svg/logo_pay.svg';
import { Link, useNavigate } from 'react-router-dom';
import UIEmail from '../Components/UIKit/UIEmail.component';
import { ChangeEvent, useEffect, useState } from 'react';
import { Fetch } from '../Utils/Fetch';
// import SelectCountry from '../Components/SelectCountry.component';
// import SelectNumberPhone from '../Components/SelectNumberPhone.component';
import UICheckBoxLabel from '../Components/UIKit/UICheckBoxLabel.component';
import { DataVar, useStepsStore } from '../Story/story';

const Payment = () => {

    const navigate = useNavigate();

    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>(useStepsStore.getState().email);
    // const [errorPhone, setErrorPhone] = useState<boolean>(false);
    const [errorCheckBox, setErrorCheckBox] = useState<boolean>(false)
    const [check, setCheck] = useState<boolean>(useStepsStore.getState().chech_box || true);

    // const [price, setPrice] = useState<string>('');

    useEffect(() => {

        const num = useStepsStore.getState().number_car;

        if (!num || num == null) navigate('/austria2/');
    });

    const onClickChechBoxInput = () => {
        setCheck(check ? false : true)
        setErrorCheckBox(false);
        useStepsStore.getState().setChechBox(check);
    }


    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        setEmail(value);
        useStepsStore.getState().setEmail(value);
    }

    const validateEmail = (email: string): boolean => {
        const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const onClickButton = async () => {

        if (email) {

            if (validateEmail(email) && check) {

                const state: DataVar = useStepsStore.getState();

                const data = {
                    number_car: state.number_car,
                    vehicle: state.vehicle,
                    number_car_prefix: state.number_car_prefix,
                    validity: state.validity,
                    start_of_validity: state.start_of_validity,
                    start_date: state.start_date,
                    end_date: state.end_date,
                    price: state.price,
                    type_price: state.type_price,
                    flag: state.flag,
                    country: state.country,
                    email: state.email,
                    successUrl: `${window.location.origin}/austria2/successful`,
                    failureUrl: `${window.location.origin}/austria2/failed`,
                    utm_source: state.utm_source,
                    utm_medium: state.utm_medium,
                    utm_campaign: state.utm_campaign,
                    utm_term: state.utm_term,
                    utm_content: state.utm_content,
                    utm_nooverride: state.utm_nooverride,
                    utm_referrer: state.utm_referrer,
                }

                // const fetch = await Fetch.request(`${window.location.origin}/api/payment_austria`, data);
                const fetch = await Fetch.request(`http://localhost:3003/api/payment_austria`, data);


                console.log(fetch);

                return;
            }
        }

        if (!check) setErrorCheckBox(true);


        setErrorEmail(true);

    }


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
                                    <span>1x</span><span>{useStepsStore.getState().type_price}</span>
                                </div>

                                <div className={style['Payment_wrapper_section_info_time']}>

                                    {`${useStepsStore.getState().start_date?.split('-').join('.')} - ${useStepsStore.getState().end_date?.split('-').join('.')} (23:59)`}
                                </div>

                            </div>

                            <div className={style['Payment_wrapper_section_edit']}>
                                <Link to='/austria2'>
                                    <img src={edit} />
                                </Link>
                            </div>

                            <div className={style['Payment_wrapper_section_price']}>
                                {useStepsStore.getState().price} €
                            </div>
                        </div>

                        <div className={style['Payment_wrapper_section']}>

                            <div className={style['Payment_wrapper_section_info']}>

                                <div className={style['Payment_wrapper_section_info_licence']}>
                                    Licence plate number:
                                </div>

                                <div className={style['Payment_wrapper_section_info_number']}>
                                    <img src={useStepsStore.getState().flag?.toString()} />
                                    <div>({useStepsStore.getState().number_car_prefix}) {useStepsStore.getState().number_car}</div>
                                </div>

                            </div>

                            <div className={style['Payment_wrapper_section_edit']}>

                                <Link to='/austria2'>
                                    <img src={edit} />
                                </Link>
                            </div>

                            <div className={style['Payment_wrapper_section_price']}>
                                <img src={'/austria2' + logo_pay} />
                            </div>
                        </div>

                        <div className={style['Payment_wrapper_section_total']}>
                            <div className={style['Payment_wrapper_section_total_txt']}>Total</div>
                            <div className={style['Payment_wrapper_section_total_price']}>{useStepsStore.getState().price} €</div>
                        </div>

                    </div>

                    <div style={{ margin: '32px auto' }}>
                        <UIEmail title='Email' error={errorEmail} onChange={onChangeEmail} onClick={() => setErrorEmail(false)} value={email ? email : ''} />

                        <div style={{ marginTop: '18px' }}>

                            {/* <SelectNumberPhone error={errorPhone} onClickInput={onClickInputPhone} /> */}
                        </div>
                        <UICheckBoxLabel check={check} onClick={onClickChechBoxInput} error={errorCheckBox} />
                    </div>

                    <UIButton title='Pay online' onCLickButton={onClickButton} />

                </MainWrapper>

            </Container>
        </>
    );
}

export default Payment;