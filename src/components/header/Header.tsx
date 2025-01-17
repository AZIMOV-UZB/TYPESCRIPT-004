import { FC,} from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss"

const Header: FC = () => {


    return (
        <div className="header"> 
            <nav className="bg-slate-400 p-4">
                <div className="container  mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
           <NavLink to={"/"}>SHOP</NavLink> 
                    </div>
                    <ul className={`md:flex space-x-8 text-white hidden `}>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                    <div className="md:hidden text-white text-2xl" >
                    </div>
                </div>
                <ul className={`md:hidden bg-gray-800 text-white  space-y-4 p-4`}>
                    <li><a href="#home" className="block hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="block hover:text-gray-300">About</a></li>
                    <li><a href="#services" className="block hover:text-gray-300">Services</a></li>
                    <li><a href="#contact" className="block hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </div>

    );
};

export default Header;
