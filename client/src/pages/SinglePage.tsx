import { useEffect, useState, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemType } from '../types';

function SinglePage() {
  const { id } = useParams();
  const [item, setItem] = useState<ItemType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.API_URL}/items/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => {
        console.error('Failed to fetch item', err);
        navigate(`/${id}/notfound`)
      });
  }, []);

  return (
    <Fragment>
      {
        item ?
          <div className="detail">
            <h2>Item Details</h2>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
          </div>
          : ""
      }
    </Fragment>
  );
}

export default SinglePage;
