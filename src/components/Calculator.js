import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';

const arr = ['', 'AC', '+/-', '%', '+', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '÷', '0', '.', '='];

export default function Calculator() {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const setExpression = (obj) => {
    setTotal(obj.total);
    setNext(obj.next);
    setOperation(obj.operation);
  };

  return (
    <div className="calculator">
      {
        arr.slice(0).map((sign, i) => (
          <Item
            key={uuidv4()}
            index={i}
            sign={sign}
            setExpression={setExpression}
            total={total}
            next={next}
            operation={operation}
          />
        ))
      }
    </div>
  );
}
