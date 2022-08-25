import './App.css';
import CenteredLayout from "./layouts/centered";
import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import ContactFormScreen from "./containers/signup-steps/contact-form-screen";
import WelcomeScreen from "./containers/signup-steps/welcome-screen";
import FlipMove from "react-flip-move";
import StyleScreen from "./containers/signup-steps/style-screen";

function App() {
    const [step, setStep] = useState(0)
    const [firstName, setFirstName] = useState('')

    const pages = [
        {index: 0, title:'welcome', content: <WelcomeScreen setStep={setStep}/>},
        {index: 1, title:'contact',content: <ContactFormScreen setStep={setStep} setFirstName={setFirstName}/>},
        {index: 2, title:'style',content: <StyleScreen setStep={setStep} firstName={firstName}/>},
    ]

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
                    {step > 0 ?
                        <Icon.ChevronLeft onClick={() => setStep(step-1)} size={40} className={'cursor-pointer transition ease-in-out duration-200 hover:scale-150'}/>
                        :
                        null
                    }
                </div>
                <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} typeName={null}>
                    {pages.map((page)=>{
                        if(step === page.index){
                            return (
                                <div key={page.title}>
                                    {page.content}
                                </div>
                            )
                        }
                    })}
                </FlipMove>
            </CenteredLayout>
        </div>
    );
}

export default App;
