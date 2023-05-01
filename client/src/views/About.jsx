import myImg from "../assets/myImg.png"

export default function About() {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="container mx-auto py-12 flex">
                <div className="w-1/3">
                    <div className="w-48 h-48 bg-gray-300 rounded-full mb-4" style={{ backgroundImage: `url(${myImg})`, backgroundSize: "cover" }}></div>
                    <h2 className="text-2xl font-semibold mb-1">Sulthan Naufal Awdihansyah</h2>
                    <hr className="border-t border-gray-300 mb-1" />
                    <p className="text-gray-500 mb-4">An eager new Software Developer looking to work in the IT Sector and learn new things everyday</p>
                </div>
                <div className="w-2/3 ml-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
                        <div className="border-t border-gray-300 my-2"></div>
                        <div className="mb-4 flex justify-between">
                            <div>
                                <h3 className="text-xl font-bold">IT Support</h3>
                                <p className="text-gray-600">Dewan Perwakilan Rakyat Republik Indonesia</p>
                            </div>
                            <p>2020 - 2022</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Human Resource</h3>
                                <p className="text-gray-600">PT. Aequalis Indonesia Raya</p>
                            </div>
                            <p>2019 - 2020</p>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Education</h2>
                        <div className="border-t border-gray-300 my-2"></div>
                        <div className="mb-4 flex justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Javascript Fullstack Developer Bootcamp</h3>
                                <p className="text-gray-600">Hacktiv8</p>
                            </div>
                            <p>2023</p>
                        </div>
                        <div className="mb-4 flex justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Bachelor's Degree in International Relations</h3>
                                <p className="text-gray-600">Padjadjaran University</p>
                            </div>
                            <p>2015 - 2019</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-xl font-bold">High School Diploma</h3>
                                <p className="text-gray-600">SMAN 1 Karawang</p>
                            </div>
                            <p>2012 - 2015</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                        <div className="border-t border-gray-300 my-2"></div>
                        <ul className="list-disc list-inside">
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Redux, React Native</li>
                            <li>Vuejs, Pinia</li>
                            <li>Node.js, Express</li>
                            <li>PostgreSQL, MongoDB</li>
                            <li>GraphQL, Apollo Server, Apollo Client</li>
                            <li>Git, GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
