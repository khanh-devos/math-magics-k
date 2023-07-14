import { useEffect, useState } from 'react';
import './utils.css';

const API = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const API_KEY = '8Dn4moNXRBFtBy/+FxeqaA==gcfYWmrBwNeX4ZuL';

export default function FetchAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });

        const [result] = await res.json();
        if (result) {
          setQuote(result.quote);
          setMessage(null);
        } else {
          setMessage('There is some error');
          setQuote(null);
        }

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setMessage(err);
      }
    };

    fetchAPI();
  }, []);

  if (isLoading) return (<div className="fetch-api">Loading...</div>);

  return (
    <div className="fetch-api">

      {
        quote && <p className="message">{quote}</p>
      }

      {
        message && <div className="message">{message}</div>
      }

    </div>
  );
}
