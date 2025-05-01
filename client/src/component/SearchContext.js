import { createContext,useState,useEffect } from "react";

export const SearchContext=createContext()
export const SearchProvider=({children})=>{
    const [obj, setObj] = useState([]);
    const [ordereditem,setOrderedItem]=useState(null)
     const addtocart=(item)=>{
        setObj((prev)=>{
            const isAlreadyInCart = prev.some(cartItem => cartItem._id === item._id);
                        if(isAlreadyInCart){
                return prev
            }
            else{
                return [...prev, item];
            }
        }
        )

     }
     const order=(items)=>{
        console.log("this function is working")
const order_item=product.find((item)=>item._id===items._id)
console.log("it is the product selected",order_item)
setOrderedItem(order_item)

     }
      useEffect(() => {
         console.log('🎉 ordereditem just changed:', ordereditem);
       }, [ordereditem]);
    const [search, setSearch] = useState("");
    const [category,setcategory]=useState('')
const [searchmatch,setsearchmatch]=useState([])
const [mencategory,setmencategory]=useState([])
const [product,setproduct]=useState([])
const [womenscategory,setwomenscategory]=useState([])
const [childrendata,setchildrendata]=useState([])
const [userInformation,setUserInformation]=useState()


return(
<SearchContext.Provider value={{searchmatch ,setsearchmatch,product,setproduct,mencategory,setmencategory,womenscategory,setwomenscategory,childrendata,setchildrendata,category,setcategory,search,setSearch,addtocart,obj,setObj,order,ordereditem,setOrderedItem,userInformation,setUserInformation}}>
{children}
</SearchContext.Provider>
)
}
