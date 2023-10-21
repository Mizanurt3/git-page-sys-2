import {  Routes, Route } from "react-router-dom";
import { Homepage , BlogContentPage } from "./pages";
import useFetch from "./hooks/useFetch";

function App() {

  let {loading, data, error} =useFetch('http://localhost:1337/api/blogs?populate=*')

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>;
 
  console.log(data)
  return (
    <div>
      
      <Routes>
        <Route path="/git-page-sys-2"  element={<Homepage blogs={data?data:""}/>}/>
        <Route path="/git-page-sys-2/blog/:id"  element={<BlogContentPage blogs={data?data:""}/>}/>

      </Routes>
      
      
    </div>
    
  )
}

export default App
