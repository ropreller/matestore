import React from "react";

const Welcome = ({ saludo }) => {
    return (
        <>
            <h2>
                Bienvenido, {saludo ?? 'Usuario no registrado'}
            </h2>
        </>
    );
}
export default Welcome;