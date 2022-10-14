import { useFetchGif } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
  const {gif,isloading}=useFetchGif(category);

  return (
    <>
    <h2>{category} </h2>
    <div className='card-grid'>
    {
      gif.map((image)=>(
        <GifItem 
          key={image.id}
          {...image}
        />
      ))
    }
    </div>

    </>
  )
}
