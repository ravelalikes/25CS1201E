import React from 'react'
import '../App.css'
import Listout from './Listout.jsx'
import ProductTemplate from './ProductTemplate.jsx'

function Content() {

    const [fetchData, setFetchData] = React.useState(null);

    React.useEffect(()=>{
        fetching();
    },[])

    function fetching(){
        const res = fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{setFetchData(json)})
    }

  return (
    <div className='content common'>
      {fetchData == null ? <ProductTemplate /> : <Listout fd = {fetchData} />}
    </div>
  )
}

export default Content
