import React from "react";
import { useState } from "react";

const LikeButton = (props) =>{

    const[like, setLike] = useState(0)

    const handleClick = (action)=>{
        return ()=>{ 
            setLike((prevLike)=>{
                prevLike +=1;
                return prevLike

            })

        }

    }
   
      return (
          <div className = "LikeButton">

          <button onClick={handleClick("increment")}>0 Likes</button>
          
             
          </div>
      )
  }

export default LikeButton