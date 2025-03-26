

import TitlesHeader from '../Components/TitlesHeader.component';
import Container from '../Components/Container.component';
import MainWrapper from '../Components/MainWrapper.component';
import UIButton from '../Components/UIKit/UIButton.component'
import Steps from '../Components/Steps.component';
import UIOptions from '../Components/UIKit/UIOptions.component';
import Vehicle_details from '../Data/Vehicle_details..json';
import Validity from '../Data/Validity.json';
import UIDateInput from '../Components/UIKit/UIDateInput.component';
// import calculateEndDate from '../Components/UIKit/UIDateInput.component';

import UILicencePlateNumber from '../Components/UIKit/UILicencePlateNumber.component';
import { useEffect, useState } from 'react';
import { useStepsStore } from '../Story/story';
import { useNavigate } from 'react-router-dom';

import { countries } from '../Data/Contries'
// import ReactGA from "react-ga4";
// import SelectCountry from '../Components/SelectCountry.component';

declare global { interface Window { ym: any } }

export const calculateEndDate = (startDate: string | number | Date, period: any) => {
    const date = new Date(startDate);

    switch (period) {
        case '1day':
            break;
        case '7days':
            date.setDate(date.getDate() + 6);
            break;
        case '10days':
            date.setDate(date.getDate() + 9);
            break;
        case '1month':
            date.setMonth(date.getMonth() + 1);
            date.setDate(date.getDate() - 1);
            break;
        case '2months':
            date.setMonth(date.getMonth() + 2);
            date.setDate(date.getDate() - 1);
            break;
        case '3months':
            date.setMonth(date.getMonth() + 3);
            date.setDate(date.getDate() - 1);
            break;
        case '6months':
            date.setMonth(date.getMonth() + 6);
            date.setDate(date.getDate() - 1);
            break;
        case '1year':
            date.setFullYear(date.getFullYear() + 1);
            date.setDate(date.getDate() - 1);
            break;
        default:
            return null;
    }

    return date;
};

const formatDateForInput = (date: string | number | Date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Index = () => {

    const [selectDate, setSelectDate] = useState<boolean>(false);
    // const [selected, setSelected] = useState("");
    const [error, setError] = useState<boolean>(false);
    const [flag, setFlag] = useState<string>('');

    // const [typeTime, setTimeTime] = useState<string>('')

    const date_now = new Date();

    const navigate = useNavigate();

    const dateT = date_now.getDate().toString();
    const monthT = (date_now.getMonth() + 1).toString();

    const dateS = new Date(+new Date() + 86400000).getDate().toString();

    const setDateInLocalStorage = (t: boolean, s: boolean = false) => {
        const vehiclePeriod = useStepsStore.getState().validity;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let selectedDate = new Date(date_now.getFullYear(), parseInt(monthT) - 1, t ? parseInt(dateT) : parseInt(dateT) + 1);

        if (s) {
            const date = useStepsStore.getState().start_date?.split('-');
            if (date) {
                selectedDate = new Date(parseInt(date[2]), parseInt(date[1]) - 1, t ? parseInt(date[0]) : parseInt(date[0]) + 1);
            }

        }

        const finalDate = selectedDate < today ? today : selectedDate;

        const endDate = calculateEndDate(finalDate, vehiclePeriod);

        const startDateStr = formatDateForInput(finalDate);
        const endDate_format = endDate ? formatDateForInput(endDate) : ''

        const startDateStr_t = startDateStr.split('-');

        const startDateStr_spl = `${startDateStr_t[2]}-${startDateStr_t[1]}-${startDateStr_t[0]}`;
        const endDate_format_t = endDate_format.split('-');
        const endDate_format_spl = `${endDate_format_t[2]}-${endDate_format_t[1]}-${endDate_format_t[0]}`;

        useStepsStore.getState().setStartDate(startDateStr_spl)
        useStepsStore.getState().setEndDate(endDate_format_spl)

    }

    const startOfValidityValue = [
        {
            title: `Immediately (${dateT.length == 1 ? '0' + dateT : dateT}.${monthT.length == 1 ? '0' + monthT : monthT}.${date_now.getFullYear()})`,
            value: '1'
        },
        {
            title: `Tomorrow (${dateS.length == 1 ? '0' + dateS : dateS}.${monthT.length == 1 ? '0' + monthT : monthT}.${date_now.getFullYear()})`,
            value: '2'
        },
        {
            title: 'Later (select date)',
            value: `3`
        }
    ]

    const handleChangeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {

        if (e.currentTarget.value === '3') {
            setSelectDate(true);
            setDateInLocalStorage(true)
            useStepsStore.getState().setStartOfValidity(startOfValidityValue[2].title);
        }
        if (e.currentTarget.value === '1') {

            setDateInLocalStorage(true)

            useStepsStore.getState().setStartOfValidity(startOfValidityValue[0].title);
        }
        if (e.currentTarget.value === '2') {


            setDateInLocalStorage(false);
            useStepsStore.getState().setStartOfValidity(startOfValidityValue[1].title)
        }

        if (e.currentTarget.value !== '3') { setSelectDate(false) }
    }


    const onClickButton = () => {

        const val: string | null = useStepsStore.getState().number_car;
        const prefix: string | null = useStepsStore.getState().number_car_prefix

        if (val) {

            if (val.length && prefix != null) {

                const state = useStepsStore.getState();

                if (state.validity === '1year') {
                    state.setEndDate('31-01-2026');
                }

                window.ym(99185149, 'reachGoal', '2-carinfo');
                navigate('/austria2/progress'); return;
            }

        } else { setError(true); }
    }


    const changePrice = (value: string) => {

        const period = useStepsStore.getState().validity;

        for (let i = 0; i < Vehicle_details.data.length; i++) {
            if (Vehicle_details.data[i].value === value) {

                console.log(value)

                console.log(Vehicle_details.data[i])

                for (let s = 0; s < Vehicle_details.data[i].data.length; s++) {
                    console.log(Vehicle_details.data[i].data[s].value === period)
                    if (Vehicle_details.data[i].data[s].value === period) {
                        useStepsStore.getState().setPrice(Vehicle_details.data[i].data[s].price);
                        break
                    }
                }

                break
            }
        }
    }


    const setTypeAvto = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const value = e.currentTarget.value;
        changePrice(value)
        // const period = useStepsStore.getState().validity;

        useStepsStore.getState().setVehicle(value);

        // for (let i = 0; i < Vehicle_details.data.length; i++) {
        //     if (Vehicle_details.data[i].value === value) {

        //         console.log(value)

        //         console.log(Vehicle_details.data[i])

        //         for (let s = 0; s < Vehicle_details.data[i].data.length; s++) {
        //             console.log(Vehicle_details.data[i].data[s].value === period)
        //             if (Vehicle_details.data[i].data[s].value === period) {
        //                 useStepsStore.getState().setPrice(Vehicle_details.data[i].data[s].price);
        //                 break
        //             }
        //         }

        //         break
        //     }
        // }

    }

    const setTypeTime = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const value = e.currentTarget.value;

        console.log('212121212')

        for (let i = 0; i < Validity.data.length; i++) {
            if (Validity.data[i].value === value) {
                console.log(Validity.data[i].price);
                // useStepsStore.getState().setPrice(Validity.data[i].price);
                useStepsStore.getState().setTypePrice(Validity.data[i].title);
                break
            }
        }

        useStepsStore.getState().setValidity(value);

        const vehiclePeriod = useStepsStore.getState().validity;

        const isIOSSafari = /iPhone|iPad|iPod/.test(navigator.userAgent)
            && !navigator.userAgent.includes('Chrome')
            && !navigator.userAgent.includes('CriOS')

        let selectedDate;

        const start_date = useStepsStore.getState().start_date;

        if (start_date) {

            if (isIOSSafari) {
                const [day, month, year] = start_date.split('-').map(Number);

                selectedDate = new Date(year, month - 1, day + 1);
            } else {
                const [day, month, year] = start_date.split('-').map(Number);

                selectedDate = new Date(year, month - 1, day);
            }
        } else {
            selectedDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate() + 1);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const finalDate = selectedDate < today ? today : selectedDate

        const endDate = calculateEndDate(finalDate, vehiclePeriod);

        const startDateStr = formatDateForInput(finalDate);

        const endDate_format = endDate ? formatDateForInput(endDate) : ''

        const startDateStr_t = startDateStr.split('-');

        const startDateStr_spl = `${startDateStr_t[2]}-${startDateStr_t[1]}-${startDateStr_t[0]}`;
        const endDate_format_t = endDate_format.split('-');
        const endDate_format_spl = `${endDate_format_t[2]}-${endDate_format_t[1]}-${endDate_format_t[0]}`;

        useStepsStore.getState().setStartDate(startDateStr_spl)
        useStepsStore.getState().setEndDate(endDate_format_spl)

        const vehile = useStepsStore.getState().vehicle;

        if (vehile) changePrice(vehile);

        // setDateInLocalStorage(typeTime === '1' ? true: false, true );
    }

    useEffect(() => {

        const data = useStepsStore.getState();

        setFlag(data.flag ? data.flag : "https://tollroad.online/austria2/svg/non_flag.png");

        data.setPrice(Validity.data[0].price);
        data.setValidity(Validity.data[0].value);
        data.setTypePrice(Validity.data[0].title);
        data.setVehicle(Vehicle_details.data[0].value);

        data.setCountry(data.country ? data.country : countries[0].name);

        // data.setFlag(data.flag ? data.flag : countries[0].flag);

        data.setNumberCarPrefix(data.number_car_prefix ? data.number_car_prefix : null);

        setDateInLocalStorage(true);

        if (data.start_date == null) { setDateInLocalStorage(true); }

    }, []);


    return (

        <>

            <Container>
                <TitlesHeader />

                <MainWrapper>

                    <Steps step={1} progress={0} />

                    <div style={{ margin: '32px auto' }}>

                        <div style={{ marginBottom: '18px' }}>
                            <UIOptions title='Vehicle details' data={Vehicle_details.data} handleChange={setTypeAvto} />
                        </div>

                        <div style={{ marginBottom: '18px' }}>
                            <UILicencePlateNumber error={error} onClickInput={() => setError(false)} flag={flag} />
                        </div>

                        <div style={{ marginBottom: '18px' }}>
                            <UIOptions title='Validity' data={Validity.data} handleChange={setTypeTime} />
                        </div>

                        <UIOptions title='Start of validity' data={startOfValidityValue} handleChange={handleChangeDate} />

                        {selectDate ? <div style={{ marginTop: '18px' }}>
                            <UIDateInput />
                        </div> : <></>
                        }

                    </div>

                    <UIButton title='Next' onCLickButton={onClickButton} />

                </MainWrapper>

            </Container>

        </>
    );
}

export default Index;