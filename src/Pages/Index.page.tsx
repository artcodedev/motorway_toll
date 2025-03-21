

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
    const [selected, setSelected] = useState("");
    const [error, setError] = useState<boolean>(false);

    const [typeTime, setTimeTime] = useState<string>('')

    const date_now = new Date();

    const navigate = useNavigate();

    const dateT = date_now.getDate().toString();
    const monthT = (date_now.getMonth() + 1).toString();

    const dateS = new Date(+new Date() + 86400000).getDate().toString();


    const setDateInLocalStorage = (t: boolean, s: boolean = false) => {
        const vehiclePeriod = useStepsStore.getState().validity;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let selectedDate  = new Date(date_now.getFullYear(), parseInt(monthT) - 1, t ? parseInt(dateT) : parseInt(dateT) + 1);

        if (s) {
            const date = useStepsStore.getState().start_date?.split('-');
            if (date) {
                selectedDate = new Date(parseInt(date[2]), parseInt(date[1]) - 1, t ? parseInt(date[0]) : parseInt(date[0]) + 1);
            }

        }

        // const selectedDate = new Date(parseInt(date[2]), parseInt(date[1]) - 1, t ? parseInt(dateT) : parseInt(dateT) + 1);

        // const selectedDate = new Date(date_now.getFullYear(), parseInt(monthT) - 1, t ? parseInt(dateT) : parseInt(dateT) + 1);

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

        console.log(e.currentTarget.value)

        if (e.currentTarget.value === '3') { setSelectDate(true) }
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

        if (val) {

            if (val.length) { navigate('/progress'); return; }

        }

        setError(true);
    }


    const setTypeAvto = (e: React.ChangeEvent<HTMLSelectElement>) => {
        useStepsStore.getState().setVehicle(e.currentTarget.value);
    }

    const setTypeTime = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const value = e.currentTarget.value;

        console.log(value);

        for (let i = 0; i < Validity.data.length; i++) {
            if (Validity.data[i].value === value) {
                useStepsStore.getState().setPrice(Validity.data[i].price);
                useStepsStore.getState().setTypePrice(Validity.data[i].title);
                break
            }
        }

        useStepsStore.getState().setValidity(e.currentTarget.value);

        setDateInLocalStorage(typeTime === '1' ? true: false, true );
    }

    useEffect(() => {

        setDateInLocalStorage(true);
        useStepsStore.getState().setVehicle(Vehicle_details.data[0].value);
        useStepsStore.getState().setNumberCarPrefix(countries[0].prefix);
        useStepsStore.getState().setFlag(countries[0].flag);
        useStepsStore.getState().setValidity(Validity.data[0].value);
        useStepsStore.getState().setTypePrice(Validity.data[0].title);
        useStepsStore.getState().setStartOfValidity(startOfValidityValue[0].title)
    });


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
                            <UILicencePlateNumber error={error} onClickInput={() => setError(false)} flag={countries[0].flag} />
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