// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalCost = cartList.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0,
      )
      return (
        <div>
          <h2>
            Order Total:<span>Rs:{totalCost}</span>/-
          </h2>
          <p>{cartList.length} items in cart</p>
          <button type="submit">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
