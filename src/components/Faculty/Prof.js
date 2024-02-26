import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './prof.css'
<<<<<<< HEAD
// import  data from "./main"
=======
// import axios from 'axios';
import  CseProfData from './main';


>>>>>>> 8dffadf60429edb4f1eedb3ab88f392b248ee79d

function ProfCard(props){
   

    // data = data;
  
    const imageSource = "https://www.cse.iitk.ac.in/profileimages/" + props.uniqueID + ".jpg"

    return(
        <div className='prof-card'>
            <div className='box-1'>
                <div className="prof-dp">
                    <div className='circle'>
                    <img src= {imageSource} alt="" />
                    </div>
                </div>
                <div className="prof-details">
                    <h2>{props.name}</h2>
                    <p>{props.desig}</p>
                   {/* <p>{props.phone} <br />{props.address} <br />kartik@iitk.ac.in</p> */}
                   <p>{props.phone}</p>
                   <p>{props.address}</p>
                   <p>{props.email}</p>
                  
                </div>
            </div>
            <div className='box-2'>
                <p>{props.research}</p>
            </div>
        </div>
    );
}


function Prof() {
<<<<<<< HEAD
    const url = "/faculty";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
    };
  
    useEffect(() => {
      fetchInfo();
    }, [])
=======
>>>>>>> 8dffadf60429edb4f1eedb3ab88f392b248ee79d

  return (
    <div id='faculty-page' className='faculty-page'>
        <h1 className='random'>Computer Science and Engineering</h1>
        {
<<<<<<< HEAD
            data.map((item) => {
=======
            CseProfData.map((item) => {
>>>>>>> 8dffadf60429edb4f1eedb3ab88f392b248ee79d
              return (
               <ProfCard 
               department ={item.department}
               key ={item.name}
               name = {item.name} 
                desig = {item.designation}
                phone ={item.contact}
                address = {item.address}
                email = {item.email}
                research ={item.research}
                uniqueID ={item.uniqueID}
               />
              )
            })
        }
    
    </div>
  )
}

export default Prof;
