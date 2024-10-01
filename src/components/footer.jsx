import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <footer class="footer">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
                        <li className="me-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="me-4">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="me-4">
                            <Link to="/what-we-provide">What We Provide</Link>
                        </li>
                        <li className="me-4">
                            <Link to="/founder">Founder</Link>
                        </li>
                        <li className="me-4">
                            <Link to="/brawlers-boxing">Brawlers Boxing</Link>
                        </li>
                        <li className="me-4">
                            <Link to="/the-grapple-hub">The Grapple Hub</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">The Butterfly Movement - Health™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )

}

export default Footer;