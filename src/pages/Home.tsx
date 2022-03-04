import {Fragment, useEffect} from "react";
import "../styles/Home.css"

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])
    return (
        <Fragment>
            <p>Hello! I'm <span className="name">Taaha Sayed</span> </p>
        </Fragment>
    )
}

export default Home