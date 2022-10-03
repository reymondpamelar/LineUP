import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";

import moment from 'moment';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import BarberDetails from "../../../barber-details";
import {createTheme, ThemeProvider} from "@mui/material";

export default function BarberDateTime(props) {
    let availability = props.barberSettings.availability
    let [minTime, setMinTime] = useState(moment())
    let [maxTime, setMaxTime] = useState(moment())
    const [value, setValue] = useState(props.date.set('minute',0));

    useEffect(() => {
        let day = value.get('day')


        if(day !== 6 && day !== 7){
            let newMinTime = moment(minTime)
            newMinTime.set('hour', availability[day-1][0])
            newMinTime.set('minute', 0)
            newMinTime.set('second', 0)
            setMinTime(newMinTime)

            let newMaxTime = moment(maxTime)
            newMaxTime.set('hour', availability[day-1][1])
            newMaxTime.set('minute', 0)
            newMaxTime.set('second', 0)
            setMaxTime(newMaxTime)
        }else{
            setValue(value.add(1, 'weeks').startOf('isoWeek'))
            let newMinTime = moment(minTime)
            newMinTime.set('hour', availability[0][0])
            newMinTime.set('minute', 0)
            newMinTime.set('second', 0)
            setMinTime(newMinTime)

            let newMaxTime = moment(maxTime)
            newMaxTime.set('hour', availability[0][1])
            newMaxTime.set('minute', 0)
            newMaxTime.set('second', 0)
            setMaxTime(newMaxTime)
        }

        props.setDate(value)
    },[value.get('hour')])

    const isWeekend = (date) => {
        const day = date.day();

        return day === 0 || day === 6;
    };

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#ECB984',
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });

    function nextStep(){
        props.setStep(5)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <BarberDetails barber={props.barberSettings} forList={false}/>
                <Stack spacing={3}>
                    <DateTimePicker
                        renderInput={(params) => <TextField color={"primary"} {...params} />}
                        label="Choose a time and date for your appointment:"
                        value={value}
                        views={['day', 'hours']}
                        onChange={(newValue) => {
                            setValue(newValue.set('minute',0));
                        }}
                        shouldDisableDate={isWeekend}
                        minDate={moment()}
                        minTime={moment(minTime)}
                        maxTime={moment(maxTime)}
                    />
                </Stack>
                <div id={'bottom'} className={'w-full flex justify-end mt-10 pb-10'}>
                    <button onClick={() => nextStep()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                        Next
                        <Icon.ChevronRight className={'w-5'}/>
                    </button>
                </div>
            </ThemeProvider>
        </LocalizationProvider>
    );
}
