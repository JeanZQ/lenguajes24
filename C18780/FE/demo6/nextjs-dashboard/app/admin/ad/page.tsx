'use client'
import { useEffect, useState } from 'react';
import '../../styles/ad.css';
import { useFetchCreateAd, useFetchDeleteAd, useFetchGetAd, useSignalRGetAds } from '@/app/api/http.ad';
import { UUID } from 'crypto';
import '../../styles/hourglass.css';
export default function Products() {
    const [message, setMessages] = useState('');
    let getMessages = useFetchGetAd();
    const newMessages = useSignalRGetAds();
    const [ad, setAd] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [deleteAdId, setDeleteAdId] = useState<UUID | null>(null);

    useFetchDeleteAd(deleteAdId);
    useFetchCreateAd(ad);

    getMessages.message = [...getMessages.message, ...newMessages.message];

    function handleSaveAd() {
        if (message.trim()) {
            setAd(message);
        }
    }

    function handleDeleteAd(id: UUID) {
        setDeleteAdId(id);
    }

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <>
            <div className="hourglassBackground">
                <div className="hourglassContainer">
                    <div className="hourglassCurves"></div>
                    <div className="hourglassCapTop"></div>
                    <div className="hourglassGlassTop"></div>
                    <div className="hourglassSand"></div>
                    <div className="hourglassSandStream"></div>
                    <div className="hourglassCapBottom"></div>
                    <div className="hourglassGlass"></div>
                </div>
            </div>
        </>;
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="card text">
                        <textarea
                            className="textarea"
                            placeholder="Text here..."
                            required
                            value={message}
                            onChange={(e) => setMessages(e.target.value)}
                        />
                        <button className="action_has has_saved" aria-label="save" type="button" onClick={handleSaveAd}>
                            <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                            >
                                <path
                                    d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    data-path="box"
                                ></path>
                                <path
                                    d="M7 3L7 8L15 8"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    data-path="line-top"
                                ></path>
                                <path
                                    d="M17 20L17 13L7 13L7 20"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    data-path="line-bottom"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card history">
                        {getMessages.message.map((message, index) => (
                            <div className='container' key={index}>
                                <div className='row'>
                                    <div className='col-9 video'>
                                        <div className="">
                                            <span>{new Date(message.date).toLocaleDateString('es-ES', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</span>
                                            <p className="" dangerouslySetInnerHTML={{ __html: message.message }}></p>
                                        </div>
                                    </div>
                                    <div className='col-3 delete'>
                                        <button className="bin-button" onClick={() => { handleDeleteAd(message.uuid) }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 39 7"
                                                className="bin-top"
                                            >
                                                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                                <line
                                                    stroke-width="3"
                                                    stroke="white"
                                                    y2="1.5"
                                                    x2="26.0357"
                                                    y1="1.5"
                                                    x1="12"
                                                ></line>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 33 39"
                                                className="bin-bottom"
                                            >
                                                <mask fill="white" id="path-1-inside-1_8_19">
                                                    <path
                                                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                                    ></path>
                                                </mask>
                                                <path
                                                    mask="url(#path-1-inside-1_8_19)"
                                                    fill="white"
                                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                                ></path>
                                                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 89 80"
                                                className="garbage"
                                            >
                                                <path
                                                    fill="white"
                                                    d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}