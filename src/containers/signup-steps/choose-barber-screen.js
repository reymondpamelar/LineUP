import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import FlipMove from "react-flip-move";
import animationData from "../../assets/squiggly-line.json";
import Lottie from "react-lottie";
import BarberDetails from "../../components/barber-details";

export default function ChooseBarberScreen(props) {
    const [barberTeam, setBarberTeam] = useState([])
    const [chosenBarber, setChosenBarber] = useState({})


    const customEnterAnimation = {
        from: { transform: 'translateX(6%)', transformOrigin: 'left center', opacity:'0' },
        to: { transform: 'translateX(0%)', transformOrigin: 'left center', opacity:'1'},
    };
    const customLeaveAnimation = {
        from: { transform: 'translateX(0%)', opacity:'1' },
        to: { transform: 'translateX(-6%)', opacity:'0'},
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const sampleBarbers = [
        {
            name: 'Reymond',
            rating:5,
            availability: [
                [10,18],
                [10,18],
                [10,18],
                [10,18],
                [10,18],
            ]
        },
        {
            name: 'Alice',
            rating:4,
            availability: [
                [10,18],
                [10,18],
                [10,18],
                [10,18],
                [10,18],
            ]
        },
        {
            name: 'Bob',
            rating:4,
            availability: [
                [10,18],
                [10,18],
                [10,18],
                [10,18],
                [10,18],
            ]
        }
    ]
    useEffect(() => {
        setTimeout(() => {
            setBarberTeam(sampleBarbers)
        },100)
    },[])

    function nextStep(){
        if(!chosenBarber.hasOwnProperty('name')){
            document.getElementById('chooseBarberError').classList.remove('opacity-0')
            document.getElementById('chooseBarberError').classList.add('opacity-100')
            document.getElementById('chooseBarberError').classList.remove('absolute')
        }else{
            props.setStep(4)
            props.setBarberSettings(chosenBarber)
        }
    }

    return (
        <div id={'styleScreen'} className={'px-20 transition ease-in-out duration-500 w-screen h-screen flex grid justify-center items-center p-10'}>
            <div id={'animate1'} className={'animate__animated w-[35rem] fixed bottom-0 -left-[5rem] animate__fadeInBottomLeft'}>
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className={''}>
                <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} staggerDelayBy={100} staggerDurationBy={50}>
                    <h1 >
                        Choose a barber:
                    </h1>
                    <div id={'chooseBarberError'} className={'opacity-0 -z-10 absolute transition ease-in-out duration-500 bg-[#963A2F] gap-4 flex justify-center text-white top-1/4 p-4 rounded-xl border text-sm'}>
                        Please choose a barber below
                    </div>
                    {barberTeam.map((barber) => {

                        function handleChange(e) {
                            setChosenBarber(barber)
                        }
                        return(
                            <div>
                                <input onChange={(e) => handleChange(e)} value={barber.name} name={'chooseBarber'} id={barber.name} type={'radio'} className={'hidden peer'}/>
                                <BarberDetails barber={barber} chosenBarber={chosenBarber.name} forList={true}/>
                            </div>
                        )
                    })}
                </FlipMove>
                <div id={'bottom'} className={'w-full flex justify-end mt-10 pb-10'}>
                    <button onClick={() => nextStep()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                        Next
                        <Icon.ChevronRight className={'w-5'}/>
                    </button>
                </div>
            </div>
        </div>
    );
}
