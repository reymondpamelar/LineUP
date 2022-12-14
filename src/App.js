import './App.css';
import CenteredLayout from "./layouts/centered";
import 'animate.css';
import * as Icon from "react-feather";
import {useState} from "react";
import ContactFormScreen from "./containers/signup-steps/contact-form-screen";
import WelcomeScreen from "./containers/signup-steps/welcome-screen";
import FlipMove from "react-flip-move";
import StyleScreen from "./containers/signup-steps/style-screen";
import Lottie from "react-lottie";
import animationData from "./assets/circular-line.json";
import ChooseBarberScreen from "./containers/signup-steps/choose-barber-screen";
import ChooseDatetime from "./containers/signup-steps/choose-datetime";
import FinalizeScreen from "./containers/signup-steps/finalize-screen";
import moment from "moment";
import ConfirmationScreen from "./containers/signup-steps/confirmation-screen";

function App() {
    const [step, setStep] = useState(0)
    const [contactDetails, setContactDetails] = useState({})
    const [hairType, setHairType] = useState({})
    const [styleSettings, setStyleSettings] = useState({})
    const [barberSettings, setBarberSettings] = useState({})
    const [date, setDate] = useState(moment())

    const pages = [
        {index: 0, title:'welcome', content: <WelcomeScreen setStep={setStep}/>},
        {index: 1, title:'contact',content: <ContactFormScreen setStep={setStep} setContactDetails={setContactDetails} setHairType={setHairType}/>},
        {index: 2, title:'style',content: <StyleScreen setStep={setStep} contactDetails={contactDetails} setStyleSettings={setStyleSettings}/>},
        {index: 3, title:'barber',content: <ChooseBarberScreen setStep={setStep} setBarberSettings={setBarberSettings}/>},
        {index: 4, title:'dateTime',content: <ChooseDatetime setStep={setStep} barberSettings={barberSettings} date={date} setDate={setDate}/>},
        {index: 5, title:'finalize',content: <FinalizeScreen setStep={setStep} contactDetails={contactDetails} hairType={hairType} styleSettings={styleSettings} barberSettings={barberSettings} date={date}/>},
        {index: 6, title:'confirmation',content: <ConfirmationScreen setStep={setStep} contactDetails={contactDetails}/>},
    ]

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const customEnterAnimation = {
        from: { transform: 'translateX(6%)', transformOrigin: 'left center', opacity:'0' },
        to: { transform: 'translateX(0%)', transformOrigin: 'left center', opacity:'1'},
    };
    const customLeaveAnimation = {
        from: { transform: 'translateX(0%)', opacity:'1' },
        to: { transform: 'translateX(-6%)', opacity:'0'},
    };
    return (
        <div className="App">
            <CenteredLayout>
                <div className={'fixed left-4 top-4 z-10'}>
                    {step > 0 && step !== 6 ?
                        <Icon.ChevronLeft onClick={() => setStep(step-1)} size={40} className={'cursor-pointer transition ease-in-out duration-200 hover:scale-150'}/>
                        :
                        null
                    }
                </div>
                {step === 2 ?
                    <div id={'animate1'} className={'animate__animated w-[25rem] md:w-[30rem] fixed md:-top-[20rem] -right-[15rem] md:-right-[10rem] animate__fadeInDown'}>
                        <Lottie
                            options={defaultOptions}
                        />
                    </div>
                    :
                    null
                }
                <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} typeName={null}>
                    {pages.map((page)=>{
                        if(step === page.index){
                            return (
                                <div key={page.title}>
                                    {page.content}
                                </div>
                            )
                        }
                        return null
                    })}
                </FlipMove>
            </CenteredLayout>
        </div>
    );
}

export default App;
