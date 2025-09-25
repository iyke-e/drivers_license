import { Link } from "react-router-dom"

const Button2 = ({ btnLink, BtnFunction, children }) => {
    return (
        <Link to={btnLink}>
            <button onClick={BtnFunction} className="border-custom-green border py-3 w-28  rounded-md font-semibold hover:bg-green-100 hover:border-green-100 text-custom-green">{children}</button>
        </Link>
    )
}



const Button = ({ btnLink, BtnFunction, children }) => {
    return (
        <Link to={btnLink}>
            <button onClick={BtnFunction} className="border border-custom-green bg-custom-green text-white py-2.5 transition-all hover:bg-green-800 px-8 rounded-md">{children}</button>
        </Link>
    )
}

export { Button2 }
export default Button
