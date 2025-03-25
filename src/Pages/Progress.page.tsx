
import { useEffect } from "react";
import Container from "../Components/Container.component";
import MainWrapper from "../Components/MainWrapper.component";
import ProgressBar from "../Components/ProgressBar.component";
import ProgressCar from "../Components/ProgressCar.component";
import Steps from "../Components/Steps.component";
import TitlesHeader from "../Components/TitlesHeader.component";
import { useStepsStore } from "../Story/story";
import { useNavigate } from 'react-router-dom';


const Progress = () => {

    const navigate = useNavigate();

    useEffect(() => {
    
            const num = useStepsStore.getState().number_car;
    
            if (!num || num == null ) navigate('/austria2')
        });

    return(
        <>
        <Container>
                <TitlesHeader />
                
                <MainWrapper>

                    <Steps step={2} progress={50}/>

                    <ProgressBar />

                </MainWrapper>

                <ProgressCar  />

            </Container>
        </>
    );
}

export default Progress;