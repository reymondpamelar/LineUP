import * as Icon from "react-feather";
import {useEffect, useState} from "react";

export default function BarberDetails (props) {
    const [barber, setBarber] = useState(props.barber)

    let stars = []
    function numStars(){
        for (let i = 0; i < barber.rating; i++){
            stars.push(<Icon.Star fill={props.chosenBarber === barber.name || !props.forList ? 'white' : '#D58258'} stroke={''}/>)
        }
    }
    numStars()

    function dayAvailability(i){

        function AmPm(time){
            if(time < 12){
                return time + 'am'
            }else {
                return time-12 + 'pm'
            }
        }

        return (
            <div>{AmPm(barber.availability[i][0])} - {AmPm(barber.availability[i][1])}</div>
        )
    }

    return (
        <label id={'barberDetails'} htmlFor={barber.name} key={barber.name}
               className={props.forList ?
                   'peer-checked:bg-[#D58258] peer-checked:text-white cursor-pointer hover:bg-black bg-white hover:text-white grid text-left max:w-[40rem] border rounded-xl p-8 px-6 my-4 text-xl transition ease-in-out duration-150'
                   :
                   'bg-[#D58258] text-white grid text-left max:w-[40rem] border rounded-xl p-8 px-6 my-4 text-xl transition ease-in-out duration-150'
        }>
            <div className={'grid grid-cols-2 border-b pb-4'}>
                <div>
                    {barber.name}
                </div>
                <div className={'flex justify-end'}>
                    {stars.map((star,i) => {
                        return (
                            <span key={i}>
                                {star}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className={'md:flex justify-center flex-wrap w-full mt-4 text-sm divide-y md:divide-y-0 md:divide-x gap-4 md:space-y-0'}>
                <div className={'flex px-4 grid justify-center text-center items-center'}>
                    <div>
                        Mon
                    </div>
                    {dayAvailability(0)}
                </div>
                <div className={'flex px-4  grid justify-center text-center items-center'}>
                    <div>
                        Tues
                    </div>
                    {dayAvailability(1)}
                </div>
                <div className={'flex px-4 grid justify-center text-center items-center'}>
                    <div>
                        Wed
                    </div>
                    {dayAvailability(2)}
                </div>
                <div className={'flex px-4 grid justify-center text-center items-center'}>
                    <div>
                        Thurs
                    </div>
                    {dayAvailability(3)}
                </div>
                <div className={'flex px-4 grid justify-center text-center items-center'}>
                    <div>
                        Fri
                    </div>
                    {dayAvailability(4)}
                </div>
            </div>
        </label>
    )
}