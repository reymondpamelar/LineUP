import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import FlipMove from "react-flip-move";
import animationData from "../../assets/squiggly-line.json";
import Lottie from "react-lottie";

export default function ChooseBarberScreen(props) {
    const [barberTeam, setBarberTeam] = useState([])
    const [chosenBarber, setChosenBarber] = useState({})
    const [availability, setAvailability] = useState({})


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
            availability: {
                mon:[10,6],
                tues:[10,6],
                wed:[10,6],
                thurs:[10,6],
                fri:[10,6],
            }
        },
        {
            name: 'Alice',
            rating:4,
            availability: {
                mon:[10,6],
                tues:[10,6],
                wed:[10,6],
                thurs:[10,6],
                fri:[10,6],
            }
        },
        {
            name: 'Bob',
            rating:4,
            availability: {
                mon:[10,6],
                tues:[10,6],
                wed:[10,6],
                thurs:[10,6],
                fri:[10,6],
            }
        }
    ]
    useEffect(() => {
        setTimeout(() => {
            setBarberTeam(sampleBarbers)
        },100)
    },[])

    function nextStep(){
        props.setStep(4)
        props.setBarberSettings([
            chosenBarber,
            availability
        ])
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
                    {barberTeam.map((barber) => {
                        let stars = []
                        function numStars(){
                            for (let i = 0; i < barber.rating; i++){
                                stars.push(<Icon.Star fill={chosenBarber === barber.name ? 'white' : '#D58258'} stroke={''}/>)
                            }
                        }
                        numStars()

                        function handleChange(e) {
                            setChosenBarber(e.target.value)
                            setAvailability(barber.availability)
                        }
                        return(
                            <div>
                                <input onChange={(e) => handleChange(e)} value={barber.name} name={'chooseBarber'} id={barber.name} type={'radio'} className={'hidden peer'}/>
                                <label htmlFor={barber.name} key={barber.name} className={'peer-checked:bg-[#D58258] peer-checked:text-white cursor-pointer hover:bg-black bg-white hover:text-white grid text-left w-[40rem] border rounded-xl p-8 px-6 my-4 text-xl transition ease-in-out duration-150'}>
                                    <div className={'grid grid-cols-2 border-b pb-4'}>
                                        <div>
                                            {barber.name}
                                        </div>
                                        <div className={'flex justify-end'}>
                                            {stars.map((star) => {return star})}
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-5 mt-4 text-sm divide-x'}>
                                        <div className={'flex grid justify-center text-center items-center'}>
                                            <div>
                                                Mon
                                            </div>
                                            <div>{barber.availability.mon[0]}am - {barber.availability.mon[1]}pm</div>
                                        </div>
                                        <div className={'flex grid justify-center text-center items-center'}>
                                            <div>
                                                Tues
                                            </div>
                                            <div>{barber.availability.tues[0]}am - {barber.availability.tues[1]}pm</div>
                                        </div>
                                        <div className={'flex grid justify-center text-center items-center'}>
                                            <div>
                                                Wed
                                            </div>
                                            <div>{barber.availability.wed[0]}am - {barber.availability.wed[1]}pm</div>
                                        </div>
                                        <div className={'flex grid justify-center text-center items-center'}>
                                            <div>
                                                Thurs
                                            </div>
                                            <div>{barber.availability.thurs[0]}am - {barber.availability.thurs[1]}pm</div>
                                        </div>
                                        <div className={'flex grid justify-center text-center items-center'}>
                                            <div>
                                                Fri
                                            </div>
                                            <div>{barber.availability.fri[0]}am - {barber.availability.fri[1]}pm</div>
                                        </div>
                                    </div>
                                </label>
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
