import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  // console.log(item)
  const { image, title, description, price } = item;
  return (
    <Wrapper>
      <img src={image} alt={title} style={{ margin: 20 }}/>
      <div>
        <h3>{title}</h3>
        <p>{description.substring(0, 200)}</p>
        <h3>£{price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  )
};

export default Item;
