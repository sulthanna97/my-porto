export default function About() {
    return (
        <>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">About Me</h1>
                <div className="mb-8">
                    <div className="w-48 h-48 bg-gray-300 rounded-full mb-4"></div>
                    <h2 className="text-2xl font-semibold">Sulthan Naufal Awdihansyah</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Education</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">Bachelor's Degree in Computer Science</h3>
                            <p className="text-gray-600">XYZ University</p>
                            <p>2018 - 2022</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">High School Diploma</h3>
                            <p className="text-gray-600">ABC High School</p>
                            <p>2014 - 2018</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">Software Developer</h3>
                            <p className="text-gray-600">Awesome Company</p>
                            <p>June 2022 - Present</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Web Developer Intern</h3>
                            <p className="text-gray-600">Innovative Startup</p>
                            <p>June 2021 - September 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
