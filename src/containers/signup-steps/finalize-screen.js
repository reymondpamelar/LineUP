import StyleChoices from "../../components/style-choices";
import * as Icon from "react-feather";
import moment from "moment";

export default function FinalizeScreen (props) {

    function handleSubmit(e){

    }
    return (
        <div className={'px-10'}>
            <div>
                <h2 className={'mb-10'}>
                    You will be scheduled with <span className={'text-[#ECB984]'}> {props.barberSettings.name} </span> for:
                </h2>
                <h1 className={'text-[#ECB984]'}>
                    {props.date.format('dddd')}, {props.date.format('h a')}
                </h1>
                <h1 className={'border-b-2 mb-10 pb-10 text-[#ECB984]'}>
                    {props.date.format('MMMM DD')}
                </h1>
            </div>
            <div>
                <h2>
                    Your chosen options:
                </h2>
                <StyleChoices styleSettings={props.styleSettings}/>
            </div>
            <div id={'bottom'} className={'w-full flex justify-end mt-10 pb-10'}>
                <button onClick={() => handleSubmit()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                    Submit
                    <Icon.ChevronRight className={'w-5'}/>
                </button>
            </div>
        </div>
    )
}