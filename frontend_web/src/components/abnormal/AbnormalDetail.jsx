import './Abnormal.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function AbnormalDetail(props) {

    const idx = useParams().id
    const [DATA, setDATA] = useState('')
    const [resultDate, setResultDate] = useState('')
    const [videoURL, setVideoURL] = useState('')
    useEffect(() => {
        const fetchData = async() =>{
            const response = await axios.get(`/api/suspicious/detail?suspiciousId=${idx}`)
            setDATA(response.data)
            setResultDate(response.data.date.slice(0,10) + ' ' + response.data.date.slice(11, 19))
            setVideoURL(response.data.descriptionVideo)
            console.log(response.data.descriptionVideo)
            console.log('https://drive.google.com/uc?export=download&id=1U948NmnGjt070V1OKyNQy4niPexplgX3')

        }
        fetchData()
    }, [idx])



    return (
        <div className="full_style flex_mid">
            <div style={{color : "white"}}>
                {videoURL && (
                <video style={{ width: '800px', height: '450px', backgroundColor: 'white' }} controls muted>
                    <source src={videoURL} type="video/mp4" />
                </video>
                )}
                <h2>ATM 번호 : {DATA.atm}</h2>
                <h2>일자 : {resultDate}</h2>
                <h2>상태 : {DATA.description}</h2>
            </div>
        </div>
    );
  } export default AbnormalDetail;
  