import { useFetch } from "./fetch";
import './index.css';
  interface Post{
        id:number;
        title:string;
        body:string;
    }
export function Index(){

    const{data:post,loading,error}=useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

   

return (
    <div className="container">
        <h1 className="text">Fetch Custom Hook</h1>
        {loading && <p>Loading......</p>}
        {error && <p>{error}</p>}
        <div className="Card">
            {post && (
                <ul>
                {post.map((e)=>(
                    <li key={e.id}  className="id">
                        <h2>{e.title}</h2>
                        <p>{e.body}</p>
                    </li>
                ))}
            </ul>
            )}
        </div>
    </div>
)
}