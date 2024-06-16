import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Postcard from "./Postcard";
import { postlistActions } from "../store/postListSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import Loader from "./Loader";

const Home = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const postlist = useSelector((store) => store.postlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatusActions.fetchingStarted());
    if (fetchStatus.fetchDone === false) {
      fetch("http://localhost:8080/items")
        .then((res) => res.json())
        .then(({items}) => {
          dispatch(fetchStatusActions.markFetchDone());
          dispatch(postlistActions.addInitialPosts(items));
          dispatch(fetchStatusActions.fetchingFinished());
        });
    }
  }, []);

  return (
    <>
      <div
        className="container text-center overflow-y-scroll"
        style={{ height: "91vh" }}
      >
        {postlist.length === 0 ? (
          <Loader />
        ) : (
          <div className="row">
            {postlist.map((item) => (
              <Postcard item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
