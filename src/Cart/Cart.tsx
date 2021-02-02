import { CartItemType } from "../App"

type Props = {
    cartItems: CartItemType[],
    addToCart: (AddItem: CartItemType) => void,
    removeFromCart: (id: number) => void
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    console.log(cartItems)
    return (
        <div>
            cart
        </div>
    )
}

export default Cart

