import portfolioImg from "../assets/UAP_GAMES.png";

export default function Portfolio() {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center max-w-lg">
            <div className="w-full mb-8">
                <img
                    src={portfolioImg}
                    alt="Portfolio Placeholder"
                    className="mx-auto rounded-lg"
                    style={{ maxWidth: "400px" }}
                />
            </div>
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Portfolio Description
                </h2>
                <p className="text-gray-700 text-lg mb-6 text-justify">
                    Uap Games is a website where you can search for your favorite games and watch streamer who are currently streaming on it, you can also add the game that you want into your wish list!
                </p>
                <div className="w-full">
                    <h3 className="text-lg font-semibold mb-2 text-center">Tech Stack</h3>
                    <ul className="text-gray-700 text-lg text-center">
                        <li>Vuejs</li>
                        <li>Firebase</li>
                        <li>Supabase</li>
                        <li>Railway</li>
                    </ul>
                </div>
                <p className="text-gray-700 text-lg mt-6 text-center">
                    Check it out here: <a href="https://uap-games-db.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">https://uap-games-db.web.app/</a>
                </p>
            </div>
        </div>
    );
}
