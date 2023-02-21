const RatingReview = ({ rating }) => {
  const stars=[]
  for(let i=0; i<rating.count; i++){
    stars.push(
      <li key={i}>
        <i className="flaticon-star-1" />
      </li>
    )
  }
  return (
    <ul className="ratings ratings-three">
      {stars}
      <li>
        <span>
          <a href="#">({rating.no_of_reviews} Reviews)</a>
        </span>
      </li>
    </ul>
  )
}

export default RatingReview