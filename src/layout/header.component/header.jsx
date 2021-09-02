import { Component } from 'react';
import { Link } from 'react-router-dom';

import './css-styles/styles.css';

class Header extends Component {

    render() { 

        return (  
            <header id="main-header" >		

                <div className="logo-container">
                    <button onClick={()=> this.props.onIsSidebarOpen()} id="btn-hide-sidebar">
                        <span className="material-icons-outlined">menu_open</span>
                    </button>
                    <Link to='/' className="logo-title">Zenuben</Link>
                </div>

                <div className="btn-options-container">

                    <button id="btn-dropdown-settings">
                        <span className="material-icons-sharp ">settings</span>
                        <ul className="dropdown-settings">
                            <Link to='/' className='setting-links'>Mi perfil</Link>
                            <Link to='/' className='setting-links'>Agregar admin</Link>
                            <Link to='/' className='setting-links'>Cerrar sessión</Link>
                        </ul>
                    </button>

                    <button onClick={()=> this.props.onIsNotificationOpen()} 
                        id="btn-show-notification"
                        className={(this.props.onNotificationAmount > 0)? 'notification-animation': null}>
                        <span className="material-icons-sharp">notifications_active</span>
                        <i>{this.props.onNotificationAmount}</i>
                    </button>

                </div>	

            </header>
        );
    }
}
 
export default Header;