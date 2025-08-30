import React, { useState } from 'react';
import axios from 'axios';
import {
  CalculatorContainer,
  Form,
  Input,
  Button,
  Result,
  Error,
} from '../App.styles';

const formatResult = (value) => {
  if (value === Infinity) {
    return "O resultado é infinito!";
  }
  if (value > 1e12) {
    return value.toExponential(2);
  }
  return value;
};

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setLcm] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = async (e) => {
    e.preventDefault();
    setError('');
    setLcm(null);

    if (!num1 || !num2) {
      setError('Por favor, insira os dois números.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:8000/api/lcm/', {
        params: {
          x: parseInt(num1, 10),
          y: parseInt(num2, 10)
        }
      });

      setLcm(response.data.result);
    } catch (err) {
      let message = 'Erro ao calcular o MMC. Verifique os números e tente novamente.';

      if (err.response && err.response.data && err.response.data.error) {
        const errorText = String(err.response.data.error);
        
        const match = errorText.match(/\[(.*?)\]/);
        if (match) {
          const errorCode = match[1];
          switch (errorCode) {
            case 'ERROR-CODE-1':
              message = 'Os números devem ser positivos!';
              break;
            default:
              message = 'Ocorreu um erro desconhecido.';
          }
        } else {
          message = errorText;
        }
      }

      setError(message);
      console.error(err);
    }
  };
  
  return (
    <CalculatorContainer>
      <Form onSubmit={handleCalculate}>
        <Input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Primeiro número"
        />
        <Input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Segundo número"
        />
        <Button type="submit">Calcular MMC</Button>
      </Form>
      {result !== null && (
        <Result>
          <div>O Menor Múltiplo Comum (MMC) é: </div>
          <div><strong>{formatResult(result)}</strong></div>
        </Result>
      )}

      {error && <Error>{error}</Error>}
    </CalculatorContainer>
  );
};

export default Calculator;
