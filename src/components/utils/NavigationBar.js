import { v4 as uuidv4 } from 'uuid';
import './utils.css';

const components = ['calculator', 'fetch-api'];

export default function NavigationBar() {
  const navigate = (e) => {
    components.forEach((item) => {
      if (item === e.currentTarget.name) {
        document.querySelector(`.${item}`).style.visibility = 'visible';
      } else {
        document.querySelector(`.${item}`).style.visibility = 'hidden';
      }
    });
  };

  return (
    <div className="navigation-bar">
      {
      components.map((e) => (
        <button className="items-shared nav-button" key={uuidv4()} type="button" name={e} onClick={navigate}>{e}</button>
      ))
    }

    </div>
  );
}
