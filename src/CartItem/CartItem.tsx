import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (AddItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { amount, title, price, id } = item;
  return (
    <>
      {amount !== 0 &&
        <Wrapper>
          <div>
            <h3>{title}</h3>
            <div className='information'>
              <p>Price: £{price}</p>
              <p>Total: £{(amount * price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
              <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => removeFromCart(id)}
              >
                -
              </Button>
              <p>{item.amount}</p>
              <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => addToCart(item)}
              >
                +
              </Button>
            </div>
          </div>
          <img src={item.image} alt={item.title} />
        </Wrapper>}
    </>
  )
};

export default CartItem;
