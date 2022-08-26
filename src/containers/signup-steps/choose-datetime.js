import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";
import FlipMove from "react-flip-move";
import animationData from "../../assets/natural-log-graph.json";
import Lottie from "react-lottie";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
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
    useEffect(() => {

    },[])

    function nextStep(){
        props.setStep(5)
    }

    const [value, setValue] = useState(dayjs());
    return (
        <div id={'styleScreen'} className={'px-20 transition ease-in-out duration-500 w-screen h-screen flex grid justify-center items-center p-10'}>
            <div id={'animate1'} className={'animate__animated w-full fixed bottom-0 -left-[5rem] animate__fadeInLefts'}>
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className={''}>
                <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} staggerDelayBy={100} staggerDurationBy={50}>
                    <h1 >
                        Choose a date and time:
                    </h1>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <DateTimePicker
                                renderInput={(params) => <TextField {...params} />}
                                label="Ignore date and time"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                minDateTime={dayjs()}
                            />
                            <DateTimePicker
                                renderInput={(params) => <TextField {...params} />}
                                label="Ignore time in each day"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                minDate={dayjs('2020-02-14')}
                                minTime={dayjs('2020-02-14T08:00')}
                                maxTime={dayjs('2020-02-14T18:45')}
                            />
                        </Stack>
                    </LocalizationProvider>
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
