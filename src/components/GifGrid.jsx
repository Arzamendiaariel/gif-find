import { Capitalize } from "../helpers"
import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifItem} from "../components";



export const GifGrid = ({category}) => {

    const {images, isLoading } = useFetchGifs(category)

    return (
      <>
          <h3>{ Capitalize(category) }</h3>
          {
          isLoading && <h2>Cargando...</h2>
          }
          <div className="card-grid">
            {
                images.map(({id, ...rest})=>
                    (
                    <GifItem
                    //  {...image}
                    key={ id }
                    {...rest}
                     />
                    )
                )
            }
          </div>
      </>
    );
}
