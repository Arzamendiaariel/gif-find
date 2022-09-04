import { useState } from "react";
import {AddCategory,  GifGrid } from "./components";


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch'])

  const onAddCategory = ( NewCategory ) =>{

    if( categories.includes(NewCategory) ) return;

    setCategories([NewCategory, ...categories])

  }



  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory
    // setCategories={setCategories}
      onNewCategory = { onAddCategory }
     />
    {/* Listado de Gifs */}
      {
        categories.map((category)=>(
            <GifGrid
             category={ category }
             key={ category }
             />
            )
          )
      }
        {/* Gif Item */}
    </>
  )
};

export default GifExpertApp