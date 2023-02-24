import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';



const ProductDetail = () => {

    const { id } = useParams();


    const [productDetail, setProductDetail] = useState(null);
    // const [productList, setProductList] = useState([]);
    console.log(productDetail)

    useEffect(() => {
		axios
			.get(`https://cms.meamacollect.ge/meama-collect/api/client/ka/`)
			.then((getData) => {
				setProductDetail(getData.data);
				console.log(getData.data);
			});
	}, [id]);
  return (
    <div>
       example
    </div>
  )
}

export default ProductDetail
