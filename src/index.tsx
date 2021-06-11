import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App(){




interface humanData {
  id: string
  uid: string
  platform: string
  type: string
  os: string
  stack: string

}



const [human, setHuman]= useState<humanData[]>([]);

const fetish = async() =>{

  const response = await fetch("https://random-data-api.com/api/computer/random_computer?size=10");
  const data = await response.json();
  setHuman(data);
  console.log(data);
}



useEffect(()=> {
  fetish();
},[]);



  return(
    <div className = 'App'>
      <div className = 'heading'>
        <div className = 'hyperRick'>
        <h1><a href= "https://www.youtube.com/watch?v=dQw4w9WgXcQ">This is a heading idk what to name it</a></h1>
        </div>
        <div className = 'loginWannabe'>
                  <p>next gen login button</p>
        </div>

      </div>

      <div className = 'navbarWannabe'>
        <div><a href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">nav</a></div>
        <div><a href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">bar</a></div>
        <div><a href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">wanna</a></div>
        <div><a href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">be</a></div>
      </div>

      <div className = 'computerList'>
      {human && human.map((com,index)=>{
        return(
        <div className = 'computer'>
        <h1>Id = {com.id}</h1>
        <p>{com.platform}</p>
        <p>{com.type}</p>
        <p>{com.os}</p>
        <p>{com.stack}</p>
      </div>
      );
      }

    )
    }
        </div>
</div>
);


}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
