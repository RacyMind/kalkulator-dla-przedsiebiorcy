import React from "react";
import Link from "react-router-dom/modules/Link";

const Menu = () => (
    <nav className="menu" role="navigation">
        <ul>
            <li className="item4"><Link to="/umowa-o-dzielo">Umowa o dzieło</Link></li>
            <li className="item9"><a href="http://kalkulator.racymind.pl">O aplikacji</a></li>
        </ul>
    </nav>
)

export default Menu