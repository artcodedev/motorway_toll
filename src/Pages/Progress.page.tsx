
import Container from "../Components/Container.component";
import MainWrapper from "../Components/MainWrapper.component";
import ProgressBar from "../Components/ProgressBar.component";
import ProgressCar from "../Components/ProgressCar.component";
import Steps from "../Components/Steps.component";
import TitlesHeader from "../Components/TitlesHeader.component";


const Progress = () => {

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