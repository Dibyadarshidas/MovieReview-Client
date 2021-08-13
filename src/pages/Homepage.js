import {gql, useQuery} from "@apollo/client";
import {Link} from 'react-router-dom';


const REVIEWS = gql`
query getReviews{
  reviews{
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

const Homepage = () => {
  const {loading,error,data} = useQuery(REVIEWS);
  console.log(data)

  const renderData = data && data.reviews.map((review,id)=>{
    return  (<div key={review.id} className="review-card">
    <div className="rating">{review.rating}</div>
    <img src={`http://localhost:1337${review.moviePic.formats.thumbnail.url}`} alt="" />
    <h2>{review.movieName}</h2>
    <small>Review</small>

    <p>{review.movieDescription.substring(0, 200)}...</p>
    <Link to={`/review-page/${review.id}`}>Read more</Link>
  </div>)
})

    if(loading) return <h2>Loading...</h2>;

    if(error) return <h2>Error :(</h2>;

    if (data) return ( <div>
    {renderData}
    </div>)
}
 
export default Homepage;