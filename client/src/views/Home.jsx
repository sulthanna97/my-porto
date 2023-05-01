import { Link } from "react-router-dom";
import portfolioImg from "../assets/UAP_GAMES.png"

export default function Home() {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-screen"
                style={{
                    backgroundImage: `url('https://berkarir.id/wp-content/uploads/2020/07/web-developer-multitasking.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white ml-8">
                    <p className="text-lg font-semibold">The Personal Website Of</p>
                    <h1 className="text-4xl font-bold mb-4">Sulthan Naufal Awdihansyah</h1>
                </div>
            </div>
            <div className="bg-white">
                <div className="container mx-auto px-4 py-12 flex items-center mt-4">
                    <div className="w-1/2 pr-8 relative">
                        <h1 className="text-4xl font-bold text-gray-700 mb-4">
                            Selected Work
                        </h1>
                        <img
                            src={portfolioImg}
                            alt="Selected Work"
                            className="mb-4 hover:opacity-75 cursor-pointer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                            <button className="border-cyan-50 text-white font-bold py-2 px-4">
                                View
                            </button>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            A Website that has the data of over 895,209 games and where you can watch Twitch stream of each game.
                        </p>
                    </div>
                    <div className="w-1/2 pl-8">
                        <h2 className="text-3xl font-bold text-gray-700 mb-4">
                            About the Website
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Welcome to my personal website, feel free to know more about me!
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            If you want more information about me, click the link below.
                        </p>
                        <p className="text-gray-700 text-lg mt-6">
                            <Link to='/about' href="#" className="text-cyan-500 hover:underline">about me!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
