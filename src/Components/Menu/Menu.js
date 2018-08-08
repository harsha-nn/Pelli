import React from 'react';
import ButtonAppBar from '../Navigation/ButtonAppBar';
import SideNav from '../Navigation/Sidenav';


class Menu extends React.Component {

    constructor(){
        super();
        this.state ={
            showMenu: false
        }        
    }


    onMenuClick = () => {
        console.log("Menu clicked");
        this.state.showMenu
        ? this.setState({showMenu:false}) 
        : this.setState({showMenu:true});
      }

      render() {
        return (
          <div>
            <ButtonAppBar onMenuClick= {this.onMenuClick} />
            {
              this.state.showMenu? <SideNav />: ""
            }
          </div>
        );
      }
    
}

export default Menu;