import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      alert('Please enter comment and rating');
    }
  };





  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to BookStore</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Pirce : ${product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 id="reviews">Reviews</h2>
          {(
            <MessageBox>There is no review</MessageBox>
          )}
          <ul>

            <li>
              {(
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Write a customer review</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <select
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="1">1- Poor</option>
                      <option value="2">2- Fair</option>
                      <option value="3">3- Good</option>
                      <option value="4">4- Very good</option>
                      <option value="5">5- Excelent</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="primary" type="submit">
                      Submit
                    </button>
                  </div>
                  <div>
                    {<LoadingBox></LoadingBox>}
                    {(
                      <MessageBox variant="danger">
                        { }
                      </MessageBox>
                    )}
                  </div>
                </form>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}