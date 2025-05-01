import React, { useEffect } from "react";
import { useContext } from "react";
import Api from "./Api";
import { SearchContext } from "./SearchContext";
function FetchData() {
  const {searchmatch,setsearchmatch}=useContext(SearchContext)
  const { search } = useContext(SearchContext);
  const { product, setproduct } = useContext(SearchContext);
  const { mencategory, setmencategory } = useContext(SearchContext);
  const { womenscategory, setwomenscategory } = useContext(SearchContext);
  const { childrendata, setchildrendata } = useContext(SearchContext);
  const {  setUserInformation } = useContext(SearchContext); // Add UserContext
  const getData = async () => {
    try {
      const response = await Api.get("/getproduct");
      console.log(response, "all the data is retrieved");
      const data = response.data.data;
      console.log(data, "this is data");
      setproduct(data);
      const userResponse = await Api.get("/me");
      console.log(userResponse.data.data.email,"user inforation is fetched")
      setUserInformation({
        name: userResponse.data.data.name,
        email: userResponse.data.data.email
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(product, "fetching data");
  useEffect(() => {
    if (product.length > 0) {
      const mensdata = product.filter(
        (item) => item.product_category?.toLowerCase().trim() === "men"
      );
      console.log(mensdata, "filtered data");
      setmencategory(mensdata);
    }
  }, [product]);
  useEffect(() => {
    if (product.length > 0) {
      const womensdata = product.filter(
        (item) => item.product_category?.toLowerCase().trim() === "women"
      );
      console.log(womensdata, "filtered data");
      setwomenscategory(womensdata);
    }
  }, [product]);

  useEffect(()=>{
console.log("it is searched")
  },[search])
  useEffect(() => {
    if (product.length > 0) {
      const childrendata = product.filter(
        (item) => item.product_category?.toLowerCase().trim() === "children"
      );
      console.log(childrendata, "filtered data");
      setchildrendata(childrendata);
    }
  }, [product]);
  useEffect(() => {
    if(search&&product.length>0){
      const match = product.filter((item) =>
        item.product_name?.trim().toLowerCase().includes(search.toLowerCase())
      );
      setsearchmatch(match);
      console.log(match, "it is matching array");
    }
    else{
      setsearchmatch([]);
    }
    
  }, [search, product]); // Add 'product' here
  

  return <></>;
}

export default FetchData;
