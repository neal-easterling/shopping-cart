
import { products } from '../helpers/productVar';
import {Accordion} from 'react-bootstrap';

//=========Cart=============
const Cart = (props) => {
  let data = props.location.data ? props.location.data : products;
  console.log(`data:${JSON.stringify(data)}`);

  return <Accordion defaultActiveKey="0">{list}</Accordion>;
};

export default Cart;