import React from 'react';
import { useContext } from 'react';

const Themes = {
    Dark:{
        "foreground":"red",
        "background":"yellow"
    },
    light:{
        "foreground":"pink",
        "background":"purple"
    }
}
// console.log(Themes.Dark.background);
const mythemes = React.createContext(Themes.light)


function Usecontext(props) {
    const data=useContext(mythemes)

    return (
       <>
       <div className="container mt-5">
        <div className="row">
            <div className="col">
                <h2 style={{backgroundColor:data.background,color:data.foreground}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque suscipit dolore consequuntur 
                    tempora quidem in iste! Ipsum reiciendis sit, doloremque iure fugiat fuga, odio soluta pariatur qui quae nostrum.</h2>

                   <button className='btn btn-outline-dark mt-5'>Click Me</button>  
            </div>
        </div>
       </div>
       </>
    );
}

export default Usecontext;