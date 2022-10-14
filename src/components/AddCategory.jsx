import { useState } from "react"

export const AddCategory = ({onAddCategories}) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange=({target})=>{
    setInputValue(target.value);
  }
  const onSumit=(event)=>{
    event.preventDefault();
    if(inputValue.trim().length<=1) return;
    onAddCategories(inputValue.trim());
    setInputValue('');
  }
  return (
    
    <form onSubmit={onSumit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />

    </form>
  )
}
