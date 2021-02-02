import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
// import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton } from './App.styles';
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const App = () => {
  const fetchProducts = async (): Promise<CartItemType[]> => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  };
  // await (await fetch('https://fakestoreapi.com/products')).json();
  
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    fetchProducts
  );
  // console.log(data);

  const getTotalItems = (items: CartItemType[]) => {

  }

  const handleAddToCart = (addItem: CartItemType) => {

  }

  const handleRemoveFromCart = (id: number) => {
    
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      {/* <Drawer anchor='right' >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton> */}
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
