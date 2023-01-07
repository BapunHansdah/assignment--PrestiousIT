import react from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

function Main(){
	return(	
		<>
		  <div className="bg-black text-white p-2">
		  <div className="flex justify-between">
		    <div>Home</div>
		  	<ul className="flex gap-2">
		  		<li className="cursor-pointer"><Link to='/about'>About</Link></li>
		  		<li className="cursor-pointer"><Link to='/headtail'>Headtail</Link></li>
		  	</ul>
		  </div>
		  </div>
		</>
	)
}

export default Main;