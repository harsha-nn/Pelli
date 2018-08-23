import React from 'react';
// import  "./Navigation.css";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn === true){
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out </p>
                <p onClick={()=>onRouteChange('home')} className='f3 link dim black underline pa3 pointer'> Dashboard </p>
                <p onClick={()=>onRouteChange('Search')} className='f3 link dim black underline pa3 pointer'> Search </p>
                <p onClick={()=>onRouteChange('MyProfile')} className='f3 link dim black underline pa3 pointer'> My Profile </p>
                <p onClick={()=>onRouteChange('Messages')} className='f3 link dim black underline pa3 pointer'> Messages </p>
                <p onClick={()=>onRouteChange('Settings')} className='f3 link dim black underline pa3 pointer'> Settings </p>

            </nav>
        );
    } else {
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p className="h1 tc"> Pelli Choopulu</p> 
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In </p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register </p>
             
            </nav>
        );
    }
}

export default Navigation;