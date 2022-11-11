import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import { currencyFormatter } from "../utilities/currencyFormmater";
import { CartItems } from "./CartItems";
import StoreItem from "../data/items.json";

type Shopping = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: Shopping) {
  const { closeCart, cartItms } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItms.map((items) => {
            return <CartItems key={items.id} {...items} />;
          })}
          <div className="ms-auto fw-bold fs-5">
            Total{":"}
            {currencyFormatter(
              cartItms.reduce((total, item) => {
                const items = StoreItem.find((it) => it.id === item.id);
                return total + (items?.price || 0) * item.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
