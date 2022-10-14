import { useState } from "react";
import{AddCategory,GifGrid} from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const onCategories = (value)=>{
    if(categories.includes(value)) return;
    setCategories([value,...categories]);
};

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onAddCategories={onCategories}/>
        {
          categories.map((category)=>(
            <GifGrid 
            
              key={category} 
              category={category}/>
          ))
        }
  
    </>
    
  )
}
