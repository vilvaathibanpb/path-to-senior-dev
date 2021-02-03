import { useEffect, useState } from 'react';

function Cats() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(res => res.json())
      .then(data => setCats(data));


  }, [])
  return (
      <ul>
        {
          cats.map((cat) => <li key={cat._id}>{cat.text}</li>)
        }
      </ul>
  );
}

export default Cats;