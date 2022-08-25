import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import ContactFormScreen from "../../containers/signup-steps/contact-form-screen";
import FlipMove from "react-flip-move";
import Overview from "./style-screen/overview";
import Lottie from "react-lottie";
import animationData from "../../assets/circular-line.json";

export default function StyleScreen(props) {
    const [step, setStep] = useState(0)

    const sections = [
        {index: 0, title:'vision', content: <Overview firstName={props.firstName} setStep={setStep}/>},
        {index: 1, title:'fade', content: <Overview firstName={props.firstName} setStep={setStep}/>},
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
        <div>
            <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} typeName={null}>
                {sections.map((page)=>{
                    if(step >= page.index){
                        return (
                            <div key={page.title}>
                                {page.content}
                            </div>
                        )
                    }
                })}
            </FlipMove>
        </div>
    );
}
