import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './prof.css'
// import  data from "./main"

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
    const url = "/faculty";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
    };
  
    useEffect(() => {
      fetchInfo();
    }, [])

  return (
    <div className='faculty-page'>
        {
            data.map((item) => {
              return (
               <ProfCard 
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
