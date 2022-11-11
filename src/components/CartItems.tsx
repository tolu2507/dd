import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import storeItems from "../data/items.json";
import { currencyFormatter } from "../utilities/currencyFormmater";

type Cart = {
  id: number;
  quantity: number;
};

export function CartItems({ id, quantity }: Cart) {
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((it) => it.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt="item img"
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 0 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {currencyFormatter(item.price)}
        </div>
          </div>
          <div>{currencyFormatter(item.price * quantity)}</div>
          <Button variant="outline-danger" size="sm" onClick={()=>removeItem(item.id)}>&times;</Button>
    </Stack>
  );
}
