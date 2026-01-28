

function Listout({ fd }) {
  return (
    <div className='display'>
      {fd.map((item) => (
        <div key={item.id} className='card'>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.description.substring(0, 100)}...</p>
          <p><b>Price: Rs. {item.price} </b></p>
        </div>
      ))}
    </div>
  )
}

export default Listout
