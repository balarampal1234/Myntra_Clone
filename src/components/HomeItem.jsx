import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { AiTwotoneDelete } from "react-icons/ai";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  //it return all items that are in bag means in cart //

  const elementFound = bagItems.indexOf(item.id) >= 0; // it gives weather item.id this element is present t in bagItems or not if it not present thend indexOf return -1 and if it present it return (0 or greater) so if a element is present after compare >=0 and if it >=0 then true otherwise false  will store in elementFound if we print elementFound this print true which are added in cart and false for remaining so accordingly we can show add and remove button//

  //console.log(item.id, elementFound);
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveFromBag}
        >
          <AiTwotoneDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
