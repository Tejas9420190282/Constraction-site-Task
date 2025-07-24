
// App.jsx
import { useState, useEffect } from "react";
import HomePage from "./component/home/HomePage";
import Loader from "./component/loader/Loader";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        // ✅ Proper cleanup for setTimeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
           {/*  {isLoading ? <Loader /> : <HomePage />} */}

           <HomePage />
        </>
    );
}

export default App;
