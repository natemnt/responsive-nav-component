import React,{Component} from 'react'

class Navigation extends Component{

    constructor(){
        super();
        this.state={}

        this.openSlideMenu = this.openSlideMenu.bind(this);
    }

    openSlideMenu(){
        document.getElementById('nav_bar__side_menu').style.width = '250px';

        
    }

    closeSlideMenu(){
        document.getElementById('nav_bar__side_menu').style.width = '0';
        
        
    }

    render(){
        return(
            <div>
                <nav className="nav_bar">
                    <span className="open_slide">
                        <a href="#" id="open_slide_svg" onClick={this.openSlideMenu}>
                            <svg width="30" height="30">
                                <path d="M0,5 30,5" stroke="#000"
                                    strokeWidth="5" className="open_slide_stroke"/>
                                <path d="M0,14 30,14" stroke="#000"
                                    strokeWidth="5" className="open_slide_stroke"/>
                                <path d="M0,23 30,23" stroke="#000"
                                    strokeWidth="5" className="open_slide_stroke"/>
                            </svg>
                        </a>
                    </span>
                    <ul className="nav_bar_list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    
                </nav>

                <div id="nav_bar__side_menu" className="nav_bar__side_nav">
                    <a href="#" className="nav_bar__btn_close"
                        onClick={this.closeSlideMenu}>&times;</a>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contacts</a>
                    <a href="#">Login</a>
                </div>
            </div>
        )
    }
}
export default Navigation;