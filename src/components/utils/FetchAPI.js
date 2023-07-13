import { useEffect, useState } from 'react';
import './utils.css';

const API = 'https://api.api-ninjas.com/v1/logo?name=';
const API_KEY = '8Dn4moNXRBFtBy/+FxeqaA==gcfYWmrBwNeX4ZuL';

export default function FetchAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [org, setOrg] = useState(null);
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setOrg(form.org.value);
    form.reset();
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(API + org, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });

        const [result] = await res.json();
        if (result) {
          setLogo(result.image);
          setMessage(null);
          setIsLoading(false);
        } else {
          setMessage(`There is no logo for this org "${org}", please add another one`);
          setTimeout(() => setMessage(null), 4000);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        setMessage(null);
        setMessage(err);
      }
    };

    if (org !== null) {
      setIsLoading(true);
      setLogo(null);
      fetchAPI();
    }
  }, [org]);

  if (isLoading) return (<div>Loading...</div>);

  return (
    <div className="fetch-api">
      <h5 className="api-header">When you input an organization name, it will show the logo of the organization</h5>

      <form onSubmit={handleSubmit}>
        <input name="org" className="input" placeholder="organization name" type="text" required />

        <input type="submit" className="items-shared" id="submit-btn" value="submit" />
      </form>

      {
        logo && <img src={logo} className="logo" alt="logo" width="200" />
      }

      {
        message && <div className="message">{message}</div>
      }

    </div>
  );
}
