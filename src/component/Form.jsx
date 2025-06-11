const Form = () => {
    return (
        <div className="container mx-auto mt-5">
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john.doe@company.com"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900">Select your course</label>
                        <select
                            id="course"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <option value="">Choose a course</option>
                            <option value="1">Full Stack Developer</option>
                            <option value="2">UI/UX Graphics Design</option>
                            <option value="3">AI/ML Data Science</option>
                            <option value="4">Animation</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="•••••••••"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input
                            type="password"
                            id="confirm_password"
                            placeholder="•••••••••"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                <div className="mb-6">
                    <span className="block mb-2 text-sm font-medium text-gray-900">Gender</span>
                    <div className="flex gap-6">
                        <div className="flex items-center">
                            <input
                                id="male"
                                type="radio"
                                name="gender"
                                value="male"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900">Male</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="female"
                                type="radio"
                                name="gender"
                                value="female"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900">Female</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="other"
                                type="radio"
                                name="gender"
                                value="other"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="other" className="ms-2 text-sm font-medium text-gray-900">Other</label>
                        </div>
                    </div>
                </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
