import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import FlipMove from "react-flip-move";
import animationData from "../../assets/natural-log-graph.json";
import Lottie from "react-lottie";
import BarberDateTime from "../../components/UI/Form/date-time-picker/BarberDateTime";
import moment from "moment";

export default function ChooseDatetime(props) {


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

    return (
        <div className={'px-20 transition ease-in-out duration-500 w-screen h-screen flex grid justify-center items-center p-10'}>
            <div className={'animate__animated w-full fixed bottom-0 -left-[5rem] animate__fadeInLeft'}>
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className={''}>
                <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} staggerDelayBy={100} staggerDurationBy={50}>
                    <h1 >
                        Choose a date and time:
                    </h1>
                    <BarberDateTime setStep={props.setStep} barberSettings={props.barberSettings} setDate={props.setDate}/>
                </FlipMove>
            </div>
        </div>
    );
}
