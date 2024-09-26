import React from "react";

function Hello(props) {
    const { nama, pesan } = props;
    return(
        <h1>
            Hello {nama}, {pesan}
        </h1>
    );
    
}

Hello.defaultProps = {
    nama : "Nuel",
    pesan : "Wish Me Luck",
};

export default Hello;