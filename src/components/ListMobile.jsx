
import { useEffect, useState } from "react";
import PostService from "./PostService";
import ListMobileItem from "./ListMobileItem";
import  '../App.css';


function ListMobile() {
  let [state, setState] = useState([]);
  async function getData() {
    let response = await PostService.getAll();
    setState(response);
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="list-mobile">
      {state.map((item, index) => 
      <ListMobileItem item={item} key={index}/>
      )}

    </div>
  )
}



export default ListMobile;