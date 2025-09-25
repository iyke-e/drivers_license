import { Link } from "react-router-dom";

export default function LoginHeader({
    heading,
    paragraph,
    linkName,
    linkUrl = "/signup",
    routeMessage,
}) {
    return (
        <div className="text-center">

            <h2 className="mb-2 text-2xl font-poppins font-semibold text-gray-900">
                {heading}
            </h2>
            <p className="text-[#838894] font-poppins">{paragraph}</p>

            {routeMessage && <h4 className="font-medium text-lg text-red-600 text-center mt-6">{routeMessage}</h4>}
        </div>
    );
}
