import { useWindos } from "./usewindows"

export function Index(){

const{width,height}=useWindos();

return(
    <div className="container">
        <h1 className="text">Window Size</h1>
        <div className="teaxt-center">
            <p>
                Width : <span>{width}</span>
            </p>
            <p>
                height : <span>{height}</span>
            </p>
        </div>
    </div>
)
}