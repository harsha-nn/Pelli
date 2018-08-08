// import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
// import logo from '../logo.svg';

// const Navigation = (props) =>{
//     // const {logo } = logo;
//     let showmenu=false;
//     // <img src={logo} alt="menu" className="grow dib pa3" height="30px" />
//     function openMenu() {
//         showmenu=true;
//         document.getElementById("mySidebar").style.display = "block";
//       }
//       function closeMenu() {
//           showmenu=false;
//         document.getElementById("mySidebar").style.display = "none";
//       }

//     return (
//         <div>
//         <div className="tc  b--solid pa2 ma2 b--purple tc bg-purple flex justify-between">
           
//             <button className="bg-purple "  onClick={this.openMenu()}>  &#9776;</button>
//             <p className='mr2  pa3'> Pelli </p>
//             <div className='flex '>
//             <p className='dib mr2'>About</p>
//             <p className='dib' >Login </p>           
//             </div>
//         </div>
//         {
//             showmenu?
//                 <div className='bg-white' style={{"width":"200px"}} id="mySidebar">
//                 <button class="w3-bar-item w3-button w3-hide-large"
//                 onClick={this.closeMenu}>Close &times;</button>
//                 <a href="#" class="w3-bar-item w3-button">Link 1</a>
//                 <a href="#" class="w3-bar-item w3-button">Link 2</a>
//                 <a href="#" class="w3-bar-item w3-button">Link 3</a>
//                 </div>
//                 : <div></div>
            
//         }
      
//         </div>
//     );

// }

// export default Navigation;