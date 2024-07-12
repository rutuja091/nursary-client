import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from "../../components/PlantCard/PlantCard"
import axios from "axios"
import toast,{Toaster} from "react-hot-toast"
function Home() {
    const [plants,setPlants]=useState([])

    const loadPlants = async () => {
      toast.loading("Loading Plants...")
        const response = await axios.get("https://nursary-server.onrender.com")

        toast.dismiss()


        toast.success("Plants Loaded Successfully")

        setPlants(response.data.data)
    }

    useEffect(()=>{
  
        loadPlants()
    },[])

  return ( 
    <div>
      <h1>Plants </h1>
      {
        plants.map((plant,i)=>{
            const {
                 
                _id,
                name,
                category,
                price,
                image,
                description
             }=plant
            return (<PlantCard
                 key={i}
                 _id={_id} 
                 name={name} 
                 category={category} 
                 price={price} 
                 image={image} 
                 description={description}/>)
        })
      }
      {

    
      }
      <Toaster/>
    </div>
  )
}

export default Home
