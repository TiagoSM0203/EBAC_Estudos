import React, { useState } from 'react';

function BMIForm() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [classification, setClassification] = useState('');

    const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    classifyBMI(bmiValue);
    
};

const classifyBMI = (bmi) => {
    if (bmi < 18.5) {
        setClassification('Abaixo do peso');
    } else if (bmi >= 18.5 && bmi < 24.9) {
        setClassification('Peso normal');
    } else if (bmi >= 25 && bmi < 29.9) {
        setClassification('Sobrepeso');
    } else if (bmi >= 30) {
        setClassification('Obesidade');
    } else {
        setClassification('Digite algum valor');
    }

    if (bmi === 'NaN') {
        setBmi('Digite algum valor');
    }
};


    return (
        <div>
        <div>
            <label>
            Altura (cm):
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            </label>
        </div>
        <div>
            <label>
            Peso (kg):
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            </label>
        </div>
        <button onClick={calculateBMI}>Calcular IMC</button>
        {bmi && (
            <div>
            <h2>Seu IMC: {bmi}</h2>
            <h3>Classificação: {classification}</h3>
            </div>
        )}
        </div>
    );
    }

export default BMIForm;