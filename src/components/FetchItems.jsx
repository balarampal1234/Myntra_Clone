import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();
  console.log(fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) =>
        res.json()
      ) /*we use { items } bcs if we use (items)it gives an array which contain items: so directly we use items using destructure  { items } this also give an array and in its 0 index we will found our content so pass items[0]*/
      .then(({ items }) => {
        //console.log("items fetched", items[0]);

        dispatch(fetchStatusActions.markFetchDone());

        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]); //when when fetchStatus value  chages it print and initially it also print
  return <></>;
};
export default FetchItems;
