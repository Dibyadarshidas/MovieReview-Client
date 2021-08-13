import {gql, useQuery} from "@apollo/client";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const REVIEW = gql`
query getReview($id : ID!){
  review(id : $id){
    moviePic{
      formats
    },
    movieName,
   movieDescription,
   rating,
   id
  }
}
`

const Reviewpage = () => {
    const {id} = useParams();
    const {data,loading,error} = useQuery(REVIEW, {
      variables : {id}
    })
 
    if(loading) return <h2>Loading...</h2>;

    if(error) return <h2>Error :(</h2>;

    return (  <div className="review-card">
    <div className="rating">{data.review.rating}</div>
    <h2>{data.review.movieName}</h2>
    {data.review.moviePic && <img src={`http://localhost:1337${data.review.moviePic.formats.thumbnail.url}`} alt="" />}
    {/* <small>Review</small> */}

    <p>{data.review.movieDescription}</p>
  </div> );
}
 
export default Reviewpage;