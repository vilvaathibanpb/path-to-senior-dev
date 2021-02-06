import { useEffect, useState } from 'react';
import Head from 'next/head'

function Cats() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(res => res.json())
      .then(data => setCats(data));


  }, [])
  return (
      <ul>
        <Head>
        <title>Cats | Home</title>
        <meta name="og:title" content="Cats Quotes"/>
        <meta name="og:type" content="Cat"/>
        <meta name="og:url" content="http://127.0.0.1:8080/"/>
        <meta name="og:site_name" content="Cats"/>
        <meta name="og:description" content="A list of Cat quotes"/>
      </Head>
        <h1>Cat Quotes</h1>
        {
          cats.length > 0 ? cats.map((cat) => <li key={cat._id}>{cat.text}</li>) : <div>Loading...</div>
        }
      </ul>
  );
}

export default Cats;