import { Link } from 'react-router-dom';

export default function Layout() {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2em 0',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
  };

  return (
    <header className="layout" style={style}>
      <h1>Math Magicians</h1>
      <ul style={ulStyle}>
        <li><Link className="linkStyle" to="/">Home</Link></li>
        <li><Link className="linkStyle" to="/calculator">Calculator</Link></li>
        <li><Link className="linkStyle" to="/api/quote">Quote</Link></li>
      </ul>
    </header>
  );
}
