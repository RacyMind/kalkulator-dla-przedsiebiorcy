import React from "react";

const Header = () => (
    <header className="fullSize subpage">
        <div className="wrapper">
            <a className="back" href="https://kalkulator.racymind.pl/web/"><img
                src={process.env.PUBLIC_URL +'/images/back.gif'} alt="Wstecz"/></a>

            <h1>Umowa o dzieło</h1>
        </div>
    </header>
)

export default Header