import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag); //it give total items in cart
  const items = useSelector((state) => state.items); //it give total items//
  //here we use filter method in total item and searching for which element from total item present in bag item//
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id); // item.id it gives which item of totalitem present in bag if it present then indexOf return some value >=0 that will store in itemIndex for that item and after that itemIndex>=0 this cond will check if that value greater than 0 means it present so it give true  and false for element which are not present //
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} key={item.id} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
