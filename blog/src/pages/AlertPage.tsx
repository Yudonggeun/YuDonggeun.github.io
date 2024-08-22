import React from 'react';
import { useAlertStore } from '../store/AlertStore';

const AlertPage = () => {

    const { isShow, message, setShow, setMessage } = useAlertStore();

    const onClick = () => {
        setShow(false);
        setMessage('');
    }

    return (
        <div
                className='absolute h-screen w-screen z-50'
                onClick={onClick}
         >
            <div
                className={`p-[10px] fixed w-full z-50 ${isShow ? "" : "hidden"}`}
            >
                <div role="alert" className="alert">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>{message}</span>
                </div>
            </div>
        </div>

    );
};

export default AlertPage;
