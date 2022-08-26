import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import FlipMove from "react-flip-move";
import Preset from "./style-screen/preset";
import Trim from "./style-screen/trim";

export default function StyleScreen(props) {
    const [step, setStep] = useState(0)
    const [preset, setPreset] = useState('')
    const [trimSet, setTrimSet] = useState({})

    const sections = [
        {index: 0, title:'preset', enabled: true, content: <Preset contactDetails={props.contactDetails} setPreset={setPreset}/>},
        {index: 1, title:'trim', enabled: preset === 'trim' || preset === 'trim + fade', content: <Trim setStep={setStep} trimSet={trimSet} setTrimSet={setTrimSet}/>},
        {index: 2, title:'fade', enabled: preset === 'fade' || preset === 'trim + fade', content: <Trim setStep={setStep} trimSet={trimSet} setTrimSet={setTrimSet}/>},
        {index: 3, title:'fade', enabled: preset === 'fade' || preset === 'trim + fade', content: <Trim setStep={setStep} trimSet={trimSet} setTrimSet={setTrimSet}/>},
    ]

    const customEnterAnimation = {
        from: { transform: 'translateX(6%)', transformOrigin: 'left center', opacity:'0' },
        to: { transform: 'translateX(0%)', transformOrigin: 'left center', opacity:'1'},
    };
    const customLeaveAnimation = {
        from: { transform: 'translateX(0%)', opacity:'1' },
        to: { transform: 'translateX(-6%)', opacity:'0'},
    };

    useEffect(() => {
        setStep(0)
    },[preset])

    useEffect(() => {
        console.log(trimSet)
    },[trimSet])

    function nextStep(){
        document.getElementById('bottom').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        if(preset){
            setTimeout(() => {
                setStep(step + 1)
            },0)
        }
    }

    return (
        <div id={'styleScreen'} className={'px-20 transition ease-in-out duration-500 w-screen h-screen flex grid justify-center items-center p-10'}>
            <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} >
                {sections.map((page)=>{
                    if(step >= page.index && page.enabled){
                        return (
                            <div id={page.title} key={page.title}>
                                {page.content}
                            </div>
                        )
                    }
                })}
                <div id={'bottom'} className={'w-full flex justify-end mt-10 pb-10'}>
                    <button onClick={() => nextStep()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                        Next
                        <Icon.ChevronRight className={'w-5'}/>
                    </button>
                </div>
            </FlipMove>
        </div>
    );
}
