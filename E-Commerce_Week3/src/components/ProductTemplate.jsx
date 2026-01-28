
import logo from '/images/logo.png'

function ProductTemplate() {
  return (
    <div className='display'>
      <div className='card'>
          <h2> Product Title </h2>
          <img src={logo} alt={"Image"} />
          <p>{"Fetching Product from API"}...</p>
          <p><b>Price: Rs. {"xxxxx"} </b></p>
        </div>
    </div>
  )
}

export default ProductTemplate
