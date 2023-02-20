import { useState, useEffect } from "react";

function userDarkMode(){
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    useEffect(() =>{
        const body = document.querySelector('body');
        if (darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [darkMode]);
    return [darkMode, toggleDarkMode];
}
export default userDarkMode
