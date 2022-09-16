import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination'

function App() {
  //to store api Data
  const [data, setData] = useState([]);
  //PerPage How many objects you want to dispaly
  const [perPage, setPerPage]= useState([]);

    {/* api data can be taken as a response and in that data OBJ is there, and we want to split that data to page per 10*/}
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => {setData(res.data); setPerPage(res.data.slice(0,10));} 
    )
  },[])

  //It Actually Taking Page number and divide that data by slice
  const pageHandler = (pageNumber) =>{
    setPerPage(data.slice((pageNumber *10)-10,pageNumber *10 ));  // for 1 index 1 *10 = 10 . for index 2 => 2* 10 = 20 ..
  }
  

  return (
   <div className='App container shadow mt-5'>
    { data.length >=1 ?
    <div>
      {/* {data.map(post => <div className='post'>{post.title}</div>)}  = to displa all the API Data*/}  
      {/* To diplay only perpage data =10 obj */}
      {perPage.map(post => <div className='border border-dark post'>{post.title}</div>)}   <br/>
      <Pagination data={data} pageHandler = {pageHandler}/>
    
    </div> 
    
    
    
    :<p>Data Not Loaded</p>
    }
   </div>
  )
}

export default App;
