import "./Header.scss";
import {List, MagnifyingGlass,X} from "@phosphor-icons/react";


const Header = () => {
    return (
        <header className="app-header">
            <div className="header-logo">
                <h1>Dashboard</h1>
            </div>
            <div className="header-content">
                <div className="scale-block">
                    <b>FONT SCALE</b>
                    <div className="font-scale-line">
                    </div>
                </div>
                <div className="search-panel">
                    <div className="search">
                        <MagnifyingGlass size={20} color="white"/>
                        <input type="text" placeholder="Type to search"/>
                        <X size={20} color="white"/>
                    </div>
                    <List size={30} weight="fill" color="var(--yellow)"/>
                </div>
            </div>
        </header>
    )
}
export default Header;