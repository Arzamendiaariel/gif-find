import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')
   
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault();

        const cleanValue = inputValue.trim().toLowerCase()
        

        if(cleanValue.length <=1) return;
        // setCategories(prevState=>[inputValue, ...prevState]);
        onNewCategory( cleanValue )
        setInputValue('');

    }


  return (
    <form onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder = 'Buscar gift'
        value = { inputValue }
        onChange={ onInputChange }/>
    </form>
  )
}
