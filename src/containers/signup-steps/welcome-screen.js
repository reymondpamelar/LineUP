import * as Icon from "react-feather";
import Lottie from 'react-lottie';
import animationData from '../../assets/horizontal-line.json';

export default function WelcomeScreen (props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    function exit(){
        document.getElementById('animate1').classList.add('animate__fadeOutRight')
        document.getElementById('animate2').classList.add('animate__fadeOutRight')
        setTimeout(() => {
            props.setStep(1)
        },1000)
    }

    return (
        <div className={'px-10'}>
            <div className={'relative w-screen'}>
                <div id={'animate2'} className={'animate__animated w-[100rem] lg:w-[300rem] lg:bottom-[0.5rem] absolute mt-[2.25rem] md:mt-[4rem] md:right-[2rem] animate__fadeInLeft'}>
                    <Lottie
                        options={defaultOptions}
                    />
                </div>
                <h1 className={' font-megalopolis text-[6rem] md:text-[8rem] animate__animated animate__fadeInRight'}>
                    LINE UP!
                </h1>
            </div>
            <div id={'animate1'} className={'animate__animated flex justify-center'}>
                <div className={'md:w-[40rem] px-10'}>
                    <div className={'text-2xl animate__animated animate__fadeInDown animate__delay-1s'}>
                        Schedule your preferred barber at your convenience.
                    </div>
                    <div className={'flex justify-center md:justify-end mt-10'}>
                        <button onClick={() => exit()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                            Get Started
                            <Icon.ChevronRight className={'w-5'}/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}