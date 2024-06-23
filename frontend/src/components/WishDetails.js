const WishDetails=({wish})=>{
    const backendUrl = "http://localhost:4000/api/event_m";
    return (
        <>
        <div className="WishDetails">
        {wish.image && <img src={`${backendUrl}${wish.image}`} alt={wish.book} />}
      <h4>{wish.book}</h4>
      <p>Written by {wish.author}</p>
      <p className="price">Price: {wish.price}</p>
      <p>Genre: {wish.genre}</p>
        </div>
        </>
    )
}
export default WishDetails;