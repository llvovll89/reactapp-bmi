import React, { useState } from "react";
import './Container.css';
import './Form.css';

export const Container = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const [bmi, setBmit] = useState('')
    const [msg, setMsg] = useState('');

    let imgUrl;

    // img
    if (bmi < 1) {
        imgUrl = null;
    } else {
        if (bmi <= 25 && bmi > 23) {
            imgUrl = require('../../assets/img/up.png');
        } else if (bmi <= 23 && bmi > 18.5) {
            imgUrl = require('../../assets/img/middle.png')
        } else if (bmi <= 18.5) {
            imgUrl = require('../../assets/img/small.png')
        } else {
            imgUrl = require('../../assets/img/pig.png')
        }
    }

    const bmiCalculater = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert('키와 몸무게를 입력해주세요ㅠ_ㅠ')
            setMsg('');
        } else {
            let bmi = weight / (height / 100) ** 2;
            setBmit(bmi.toFixed(2));
            if (bmi > 25) {
                setMsg('비만입니다.')
            } else if (bmi <= 25 && bmi > 23) {
                setMsg('과체중입니다.')
            } else if (bmi <= 23 && bmi > 18.5) {
                setMsg('정상입니다.')
                    ;
            } else {
                setMsg('저체중입니다.')

            }
        }

    }

    const resetBtn = () => {
        setWeight(0);
        setHeight(0);
        setBmit("");
        alert('리셋합니다.')
    }

    return (
        <div className="container">
            <div className="text-content">
                <h2 className="title">BMI SITE</h2>
                <span className="logo">calculater</span>
            </div>
            <div className="infomatin">
                <p>&nbsp; BMI 는 자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값입니다.</p>
                <p>체질량지수(BMI)는 근육량, 유전적 원인, 다른 개인적 차이를 반영하지 못하는 단점이 있음에도 불구하고
                    조사자들이나 의료인들이 가장 많이 쓰는 방법 중 하나입니다.</p>
            </div>
            <div className="form">
                <form onSubmit={bmiCalculater}>
                    <div className="content">
                        <label htmlFor="weight">체중</label>
                        <input placeholder="0" value={weight} onChange={(e) => {
                            setWeight(e.target.value);
                        }} />
                        <span> (KG)</span>
                    </div>
                    <div className="content">
                        <label htmlFor="height">신장</label>
                        <input placeholder="0" value={height} onChange={(e) => {
                            setHeight(e.target.value)
                        }} />
                        <span>(cm)</span>
                    </div>
                    <div className="content btnContent">
                        <button className="btn submitBtn" type="submit">SUBMIT</button>
                        <button className="btn refreshBtn" onClick={resetBtn}>INIT</button>
                    </div>
                </form>
                <div className="box">
                    <p>BMI 지수 <span className="red">{bmi}</span></p>
                    <p>비만도 결과 <span>{msg}</span></p>
                </div>
            </div>

            <div className="img-container">
                <img src={imgUrl} alt="img..." />
            </div>

            <div className="bmi-container">
                <div className="bmi-header">
                    <ul>
                        <li className="header-item">BMI</li>
                        <li className="header-item">18.5</li>
                        <li className="header-item">23</li>
                        <li className="header-item">25.00</li>
                    </ul>
                </div>
                <div className="bmi-body">
                    <ul>
                        <li className="body-item">저체중</li>
                        <li className="body-item">정상</li>
                        <li className="body-item">과체중</li>
                        <li className="body-item">비만</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}