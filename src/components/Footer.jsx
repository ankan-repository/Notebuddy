import React from "react";

function Footer(){
    const curr_yr = new Date().getFullYear();
    return (
        <footer>
            <p> Copyright {curr_yr} </p>
        </footer>
    );
}
export default Footer;