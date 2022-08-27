import StyleChoices from "../../components/style-choices";
import * as Icon from "react-feather";
import Lottie from "react-lottie";
import animationData from "../../assets/horizontal-line.json";

export default function FinalizeScreen (props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleSubmit = async() =>{
        console.log('sending')
        const req = await fetch(`https://lineup-backend-emailer.herokuapp.com/api/emailSender`, {
            method: 'POST',
            headers: {'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
            body: JSON.stringify({
                contactDetails: props.contactDetails,
                hairType: props.hairType,
                styleSettings: props.styleSettings,
                barber: props.barberSettings.name
            })
        })
        if(req.status === 200){
            nextStep()
        }
    }

    function nextStep(){
        document.getElementById('animate1').classList.add('animate__fadeOutRight')
        document.getElementById('animate2').classList.add('animate__fadeOutRight')
        setTimeout(() => {
            props.setStep(6)
        },1000)
    }

    return (
        <div className={' px-20 transition ease-in-out duration-500 w-screen h-screen flex flex-col justify-center items-center p-10'}>
            <div className={''}>
                <h2 className={'mb-10 px-10'}>
                    You will be scheduled with <span className={'text-[#ECB984]'}> {props.barberSettings.name} </span> for:
                </h2>
                <div className={'px-10'}>
                    <h1 className={'text-[#ECB984]'}>
                        {props.date.format('dddd')}, {props.date.format('MMMM DD')}
                    </h1>
                    <h1 className={' text-[#ECB984]'}>
                        {props.date.format('h a')}
                    </h1>
                </div>
                <div className={'relative w-screen py-10 pr-4'}>
                    <div id={'animate2'} className={'animate__animated w-full h-full  animate__fadeInLeft'}>
                        <Lottie
                            options={defaultOptions}
                        />
                    </div>
                </div>
            </div>
            <div className={'flex grid justify-center'}>
                <h2>
                    Your chosen options:
                </h2>
                <StyleChoices styleSettings={props.styleSettings}/>
            </div>
            <div id={'animate1'} className={'w-full flex justify-center md:justify-end mt-10 pb-10 animate__animated'}>
                <button onClick={() => handleSubmit()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                    Submit
                    <Icon.ChevronRight className={'w-5'}/>
                </button>
            </div>
        </div>
    )
}