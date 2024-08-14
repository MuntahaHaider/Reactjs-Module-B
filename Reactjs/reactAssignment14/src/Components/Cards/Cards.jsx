import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Rating from '../../Icons/Rate';

function Cards({id,title,image,desc,categary,price}) {
  return (
   <div className='container-fluid' style={{width:300,margin:9,}}>
      <NavLink style={{textDecoration:'none',color:'black'}}>
      <div>
        <img width={250} height={300}  src={image} alt="" />
        </div>
        <br />
      <div>
        <div>
           <p>{categary}</p>
            <h6>{title.slice(0,25)}</h6>
            <p>{desc.slice(0,50)}</p>
            <Rating/>
            <p>${price}</p>
        </div>
      </div>
      </NavLink>
   </div>
  );
}

export default Cards;