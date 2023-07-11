import Item from './Item';

const arr = ['0', 'AC', '+/-', '%', '+', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

export default function Calculator() {
  return (
    <div className="calculator">
      {
        arr.map((sign, i) => <Item key={sign} index={i} sign={sign} />)
      }
    </div>
  );
}
