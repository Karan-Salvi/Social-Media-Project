import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postlistActions } from "../store/postListSlice";
import { Form, Link } from "react-router-dom";

const CreatePost = () => {
  const dispatch = useDispatch();

  let userIdElement = useRef();
  let titleElement = useRef();
  let bodyElement = useRef();
  let reactionElement = useRef();
  let tagsElement = useRef();
  let viewsElement = useRef();

  const handleOnsubmit = (event) => {
    event.preventDefault();
    let data = {
      id: userIdElement.current.value,
      title: titleElement.current.value,
      body: bodyElement.current.value,
      reactions: { likes: reactionElement.current.value, dislikes: 4 },
      views: viewsElement.current.value,
      tags: tagsElement.current.value.split(" "),
    };
    dispatch(postlistActions.addPost(data));
    return redirect("/");
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100vw" }}
      >
        <Form className="w-50" onSubmit={handleOnsubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter User ID :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={userIdElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Post Title :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={titleElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Post Description :
            </label>
            <textarea
              rows={4}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={bodyElement}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Post reactions :
            </label>

            <input
              type="text"
              className="form-control col-6"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={reactionElement}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter views:
            </label>

            <input
              type="text"
              className="form-control col-6"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={viewsElement}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter tags :
            </label>
            <input
              type="text"
              className="form-control col-6"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter the tags with space..."
              ref={tagsElement}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};
export default CreatePost;
