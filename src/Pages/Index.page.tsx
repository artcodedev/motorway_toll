

import TitlesHeader from '../Components/TitlesHeader.component';
import Container from '../Components/Container.component';
import MainWrapper from '../Components/MainWrapper.component';
import UIButton from '../Components/UIKit/UIButton.component'
import Steps from '../Components/Steps.component';
import UIOptions from '../Components/UIKit/UIOptions.component';
import Vehicle_details from '../Data/Vehicle_details..json';
import Validity from '../Data/Validity.json';
import UIDateInput from '../Components/UIKit/UIDateInput.component';

import UILicencePlateNumber from '../Components/UIKit/UILicencePlateNumber.component';
import { useState } from 'react';
import { useStepsStore } from '../Story/story';
import { useNavigate } from 'react-router-dom';

const Index = () => {

    const [selectDate, setSelectDate] = useState<boolean>(false);
    const [selected, setSelected] = useState("");
    const [error, setError] = useState<boolean>(false);

    const date_now = new Date();

    const navigate = useNavigate();

    const dateT = date_now.getDate().toString();
    const monthT = (date_now.getMonth() + 1).toString();

    const dateS = new Date(+new Date() + 86400000).getDate().toString();

    const startOfValidityValue = [
        {
            title: `Immediately (${dateT.length == 1 ? '0' + dateT : dateT}.${monthT.length == 1 ? '0' + monthT : monthT }.${date_now.getFullYear()})`,
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

        if (e.currentTarget.value === '3') {setSelectDate(true)}
        else {setSelectDate(false)}
    }

    const onClickButton = () => {

        const val: string | null = useStepsStore.getState().number_car;

        if (val) {

            if (val.length) {navigate('/progress'); return;}

        }

        setError(true)
    }

    return (

        <>

            <Container>
                <TitlesHeader />

                <MainWrapper>

                    <Steps step={1} progress={0} />

                    <div style={{ margin: '32px auto' }}>

                        <div style={{ marginBottom: '18px' }}>
                            <UIOptions title='Vehicle details' data={Vehicle_details.data} />
                        </div>

                        <div style={{ marginBottom: '18px' }}>
                            <UILicencePlateNumber error={error} onClickInput={() => setError(false)}/>
                        </div>

                        <div style={{ marginBottom: '18px' }}>
                            <UIOptions title='Validity' data={Validity.data} />
                        </div>

                        <UIOptions title='Start of validity' data={startOfValidityValue} handleChange={handleChangeDate}/>

                        {selectDate ? <div style={{ marginTop: '18px' }}>
                            <UIDateInput />
                        </div> : <></>
                        }

                    </div>

                    <UIButton title='Next' onCLickButton={onClickButton}/>

                </MainWrapper>

            </Container>

        </>
    );
}

export default Index;