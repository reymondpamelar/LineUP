import './App.css';
import CenteredLayout from "./layouts/centered";
import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import ContactForm from "./containers/signup-steps/contact-form";
import WelcomeScreen from "./containers/signup-steps/welcome-screen";
import FlipMove from "react-flip-move";

function App() {
    const [step, setStep] = useState(0)

    const pages = [
        {index: 0, title:'welcome', content: <WelcomeScreen setStep={setStep}/>},
        {index: 1, title:'contact',content: <ContactForm/>},
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
                <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} typeName={null}>
                    {pages.map((page)=>{
                        console.log(page.index)
                        if(step === page.index){
                            return (
                                <div key={pages.title}>
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
