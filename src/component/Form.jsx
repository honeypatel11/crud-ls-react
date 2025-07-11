import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegistrationUI = ({ addUser, editedUser }) => {
    const [text, setText] = useState({
        name: "",
        email: "",
        course: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const [error, setError] = useState({});

    useEffect(() => {
        if (editedUser) {
            setError({});
            setText(editedUser);
        } else {
            setText({
                name: "",
                email: "",
                course: "",
                password: "",
                confirmPassword: "",
                gender: ""
            });
        }
    }, [editedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempObj = {};

        if (!text.name.trim()) tempObj.name = "Please enter your name";

        if (!text.course) tempObj.course = "Please select a course";

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!text.email.trim() || !emailRegex.test(text.email)) {
            tempObj.email = "Please enter a valid email";
        }

        if (!text.gender) tempObj.gender = "Please select your gender";

        if (!text.password.trim()) {
            tempObj.password = "Please enter a password";
        } else if (text.password.length < 8) {
            tempObj.password = "Password must be at least 8 characters";
        }

        if (text.confirmPassword !== text.password) {
            tempObj.confirmPassword = "Passwords do not match";
        }

        setError(tempObj);
        if (Object.keys(tempObj).length > 0) return;

        if (editedUser) {
            addUser(text);
            if (
                text.name !== editedUser.name ||
                text.email !== editedUser.email ||
                text.course !== editedUser.course ||
                text.gender !== editedUser.gender ||
                text.password !== editedUser.password ||
                text.confirmPassword !== editedUser.confirmPassword
            ) {
                toast.warn("User Updated Successfully");
            } else {
                toast.error("Please Update The User");
            }
        } else {
            const updatedUsers = { ...text, id: Date.now() };
            addUser(updatedUsers);
            toast.success("User Added Successfully");
        }

        setText({
            name: "",
            email: "",
            course: "",
            password: "",
            confirmPassword: "",
            gender: ""
        });
    };

    const handleChange = (e) => {
        const key = e.target.name || e.target.id;
        setText({ ...text, [key]: e.target.value });
        setError({ ...error, [key]: "" });
    };
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 px-4 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden">

          
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-10 flex flex-col items-center justify-center text-white">
                <div className="w-full h-80 bg-[url('https://koteti.ac.tz/wp-content/themes/zilom/images/register.png')] bg-no-repeat bg-contain bg-center"></div>
                <p className="mt-6 text-center font-light text-sm">Empower your learning journey with us.</p>
            </div>
           
            <div className="p-10 bg-slate-100 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-xl p-8 shadow-md space-y-6">

                    <h2 className={`text-2xl font-bold text-center ${editedUser ? "text-yellow-500" : "text-indigo-600"}`}>
                        {editedUser ? "Update Student" : "Register Student"}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={text.name}
                                onChange={handleChange}
                                className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${error.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-indigo-300'}`}
                            />
                            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                            <select
                                id="course"
                                value={text.course}
                                onChange={handleChange}
                                className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${error.course ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-indigo-300'}`}
                            >
                                <option value="">--Select Course--</option>
                                <option value="1">Full Stack Development</option>
                                <option value="2">UI/UX</option>
                                <option value="3">AI/ML/DS</option>
                            </select>
                            {error.course && <p className="text-red-500 text-sm mt-1">{error.course}</p>}
                        </div>
                    </div>

               
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={text.email}
                                onChange={handleChange}
                                className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${error.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-indigo-300'}`}
                            />
                            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <div className="flex items-center space-x-4 mt-2">
                                {["Male", "Female"].map((g) => (
                                    <label key={g} className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={g}
                                            checked={text.gender === g}
                                            onChange={handleChange}
                                            className="form-radio text-indigo-600"
                                        />
                                        <span className="ml-2 text-gray-700">{g}</span>
                                    </label>
                                ))}
                            </div>
                            {error.gender && <p className="text-red-500 text-sm mt-1">{error.gender}</p>}
                        </div>
                    </div>

                 
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={text.password}
                                onChange={handleChange}
                                className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${error.password ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-indigo-300'}`}
                            />
                            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={text.confirmPassword}
                                onChange={handleChange}
                                className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${error.confirmPassword ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-indigo-300'}`}
                            />
                            {error.confirmPassword && <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>}
                        </div>
                    </div>

              
                    <button
                        type="submit"
                        className={`w-full py-3 text-white font-semibold rounded-lg transition duration-300 ${editedUser ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    >
                        {editedUser ? "Update" : "Submit"}
                    </button>

                    <ToastContainer />
                </form>
            </div>
        </div>
    </div>
);

};

export default RegistrationUI;
