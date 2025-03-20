import { useEffect } from "react";
import Container from "../Components/Container.component";
import MainWrapper from "../Components/MainWrapper.component";
import ProgressBar from "../Components/ProgressBar.component";
import ProgressCar from "../Components/ProgressCar.component";
import Steps from "../Components/Steps.component";
import TitlesHeader from "../Components/TitlesHeader.component";
import { useNavigate } from "react-router-dom";


const Progress = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/payment'), 1500);
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