export default function Home() {
  const pStyle = {
    fontSize: '1.5em',
  };

  const homeStyle = {
    padding: '3em 0',
  };

  return (
    <div style={homeStyle}>
      <h2>Welcome to our page!</h2>
      {/* eslint max-len: ["error", { "code": 500 }] */}
      <p style={pStyle}>This page uses React Router. It is a JavaScript framework that lets us handle client and server-side routing in React applications. </p>
      <p style={pStyle}>React Router enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>

    </div>
  );
}
