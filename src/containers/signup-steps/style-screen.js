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
        {index: 0, title:'preset', content: <Preset contactDetails={props.contactDetails} setPreset={setPreset}/>},
        {index: 1, title:'trim', content: <Trim setStep={setStep} trimSet={trimSet} setTrimSet={setTrimSet}/>},
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
        console.log(trimSet)
    },[trimSet])

    return (
        <div className={'px-20'}>
            <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} typeName={null}>
                {sections.map((page)=>{
                    if(step === page.index){
                        function nextStep(){
                            setTimeout(() => {
                                setStep(step + 1)
                            },0)
                        }
                        return (
                            <div key={page.title}>
                                {page.content}
                                <div className={'flex justify-end mt-10'}>
                                    <button onClick={() => nextStep()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                                        Next
                                        <Icon.ChevronRight className={'w-5'}/>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                })}
            </FlipMove>
        </div>
    );
}
