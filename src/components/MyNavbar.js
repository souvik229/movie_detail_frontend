import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Navbar extends Component {
  render() {
    return (
      <>
        

        
          <nav className=" Mynavbar shadow" >

            <div >

              <h1  className='nav-text' ><Link to='/'> Home</Link></h1>



              <h1 className='nav-text' ><Link to='/fav'>Favourites</Link> </h1>


              <h1  className='nav-text' ><Link to='/dem'>On Demand</Link></h1>

            </div>
          </nav>



            <a target="_blabk" href="https://github.com/utkarshhhhh"><img className='MYPic' src="https://avatars.githubusercontent.com/utkarshhhhh" /></a>

        
      </>

    )
  }
}

export default Navbar