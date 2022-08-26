import 'animate.css';
import * as Icon from "react-feather";
import {useEffect, useState} from "react";

import dayjs from 'dayjs';
import moment from 'moment';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import BarberDetails from "../../../barber-details";

export default function BarberDateTime(props) {
    let availability = props.barberSettings.availability
    let [minTime, setMinTime] = useState(moment())
    let [maxTime, setMaxTime] = useState(moment())

    const [value, setValue] = useState(moment());

    useEffect(() => {
        let newValue = moment(value)
        if(newValue.get('hour') > 0){
            newValue.set('minute', 0)
            setValue(newValue)
        }
        let day = moment(value).get('day')

        if(availability[day-1][0] < 12){
            let newMinTime = moment(minTime)
            newMinTime.set('hour', availability[day-1][0])
            newMinTime.set('minute', 0)
            newMinTime.set('second', 0)
            setMinTime(newMinTime)
        }

        if(availability[day-1][1] > 12){
            let newMaxTime = moment(maxTime)
            newMaxTime.set('hour', availability[day-1][1])
            newMaxTime.set('minute', 0)
            newMaxTime.set('second', 0)
            setMaxTime(newMaxTime)
        }
    },[value])

    const isWeekend = (date) => {
        const day = date.day();

        return day === 0 || day === 6;
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BarberDetails barber={props.barberSettings} forList={false}/>
            <Stack spacing={3}>
                <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Ignore time in each day"
                    value={value}
                    views={['day', 'hours']}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    shouldDisableDate={isWeekend}
                    minDate={moment()}
                    minTime={moment(minTime)}
                    maxTime={moment(maxTime)}
                />
            </Stack>
        </LocalizationProvider>
    );
}
