import type { Gif } from "../interfaces/gif.interface"


interface GifProps{
  gifs: Gif[]
}
// export const GifList: FC<GifProps> = ({gif}) => {
export const GifList = ({gifs} :GifProps) => {
  return (
       <div className="gifs-container">
            {
                gifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3> { gif.title }</h3>
                        <p>
                            { gif.width } x { gif.height }
                        </p>
                    </div>
                ))
            }
      
                
        </div>
  )
}
