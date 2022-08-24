import * as Icon from "react-feather";

export default function WelcomeScreen (props) {
    return (
        <div>
            <div className={'flex justify-center'}>
                <img className={'w-32'} src={'scissors.png'}/>
            </div>
            <h1 className={' font-megalopolis text-[8rem] animate-slideUp'}>
                LINE UP!
            </h1>
            <div className={'text-2xl animate__animated animate__fadeInDown animate__delay-1s'}>
                Schedule your preferred barber at your convenience.
            </div>
            <div className={'flex justify-end mt-10'}>
                <button onClick={()=>props.setStep(1)} className={'gap-4 flex items-center rounded-xl bg-[#D58258] text-white p-4 px-10 animate__animated animate__fadeInDown'}>
                    Get Started
                    <Icon.ChevronRight className={'w-5'}/>
                </button>
            </div>
        </div>
    )
}