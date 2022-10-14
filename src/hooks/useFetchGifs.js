import { useEffect, useState } from "react";
import { getApidata } from "../helpers/getApiGif";

export const useFetchGif = (category)=>{
    const [gif, setGif] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const apiGif=async ()=>{
      const imageGif=await getApidata(category);
      setGif(imageGif);
      setIsloading(false);
    
    };
    useEffect(()=>{
      apiGif();
    },[]);
    return {
        gif,
        isloading
    }
}