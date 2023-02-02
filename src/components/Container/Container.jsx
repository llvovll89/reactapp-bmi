import React, { useState } from "react";
import { data } from "../../assets/data/data";
import './Container.css';
import './Form.css';

export const Container = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [datas, setDatas] = useState([]);

    const [bmi, setBmit] = useState('')
    const [msg, setMsg] = useState('');

    const [show, setShow] = useState(false);

    const bmiCalculater = (e) => {
        e.preventDefault();
        setShow(!show)

        if (weight === 0 || height === 0) {
            setMsg('');
            setShow(show);
        } else {
            let bmi = weight / (height / 100) ** 2;
            setBmit(bmi.toFixed(2));
            if (bmi > 25) {
                setMsg('비만입니다.')
                setDatas([data[3].text2, data[3].desc])
            } else if (bmi <= 25 && bmi > 23) {
                setMsg('과체중입니다.')
                setDatas([data[2].text2 , data[2].desc])
            } else if (bmi <= 23 && bmi > 18.5) {
                setMsg('정상입니다.');
                setDatas([data[1].text2 , data[1].desc])
            } else {
                setMsg('저체중입니다.')
                setDatas([data[0].text2 , data[0].desc])
            }
        }
        setHeight("");
        setWeight("");
    }

    const closeBtn = () => {
        setShow(!show);
    }

    const resetBtn = () => {
        alert('리셋합니다.')
        window.location.replace("/")
    }

    return (
        <div className={!show ? "container" : "container modal_container"}>
            <div className="text-content">
                <h2 className="title">나의 체질량지수 (BMI)</h2>
            </div>
            <div className="infomatin">
                <p> BMI 는 자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값입니다.</p>
                <p>BMI는 몸무게를 신장으로 나눈 수치로 저체중, 정상체중, 과체중, 혹은 비만 중 어디에 속하는지를 알려줍니다. 전문가들은 환자의 만성질환 위험을 가늠하기 위해 BMI를 사용하기도 합니다. 주의: BMI는 신장과 체중만을 이용한 결과이기 때문에 체지방량을 대표하지는 않습니다. 그러므로 지방량, 근육량, 혹은 뼈 무게를 구분할 수 없습니다.</p>
            </div>
            <form onSubmit={bmiCalculater} id="form">
                <div className="items">
                    <div className="content border_radius">
                        <label htmlFor="height">신장</label>
                        <input required value={height} onChange={(e) => {
                            setHeight(e.target.value)
                        }} />
                        <span>(cm)</span>
                    </div>
                    <div className="content border_radius">
                        <label htmlFor="weight">체중</label>
                        <input required value={weight} onChange={(e) => {
                            setWeight(e.target.value);
                        }} />
                        <span> (KG)</span>
                    </div>
                </div>
                <div className="content btnContent">
                    <button className="btn submitBtn" type="submit">SUBMIT</button>
                    <button className="btn refreshBtn" onClick={resetBtn}>RESET</button>
                </div>
            </form>
            <div className={!show ? "hide" : "box"}>
                <div className="textbox">
                    <p>BMI 지수 <span className="red">{bmi}</span></p>
                    <p>비만도 결과 <span>{msg}</span></p>
                </div>
                <div className="result">{datas[0]}</div>
                <div className="result_two">{datas[1]}</div>
                <button className="close_btn" onClick={closeBtn}>CLOSE</button>
            </div>

            <div className="bmi-container">
                <div className="bmi_title">
                    <span className="text">나의 체질량 지수(BMI) 지표</span>
                </div>
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