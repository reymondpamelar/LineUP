//const Text = ({name, label, type, placeholder, onChange, children}, props) => {
import {useRef} from "react";

const TextInput = (props) => {;
    const twStyles = [
        'w-full',
        'px-4 py-2',
        'appearance-none',
        ' focus:outline dark:focus:outline-white outline-none transition duration-200 ease-in-out hover:border-[#D58258] focus:border-[#963A2F] placeholder-gray-600',
        'min-w-0',
        'text-xs',
        'block',
        'bg-transparent border-b-2 dark:nm-inset-gray-800 dark:text-white',
        'text-black text-md',
        'no-autofill-bkg'
    ]
    return (
        <div className="text-gray-900 w-full">
            <label className="font-default text-black">{props.label}</label>
            <input {...props.formhook} {...props} className={twStyles.join(' ')} />
        </div>
    )
}

export default TextInput;
