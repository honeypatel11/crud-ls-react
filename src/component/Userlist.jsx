const UserList = ({ users, deleteUser, getEditUser }) => {
    const handleDelete = (userId) => {
        deleteUser(userId);
    };

    const handleEdit = (user) => {
        getEditUser(user);
    };

    const getCourse = (course) => {
        switch (course) {
            case 1:
                return "Full Stack Development";
            case 2:
                return "UI/UX";
            case 3:
                return "AI/ML/DS";
            default:
                return "Unknown Course";
        }
    };

    return (
        <div className="min-h-[459px] bg-gray-100 p-4 rounded-xl shadow-md max-w-6xl mx-auto mt-8">
            {users.length !== 0 ? (
                <div className="overflow-x-auto rounded-xl shadow-inner bg-white">
                    <table className="min-w-full text-sm text-left text-gray-700">
                        <thead className="uppercase text-white bg-gradient-to-r from-indigo-600 to-purple-600 sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Course</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Gender</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) => (
                                <tr
                                    key={item.id}
                                    className="even:bg-gray-100 hover:bg-indigo-50 transition-colors border-b"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                                    <td className="px-6 py-4">{getCourse(Number(item.course))}</td>
                                    <td className="px-6 py-4">{item.email}</td>
                                    <td className="px-6 py-4">{item.gender}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-4">
                                            <button
                                                className="text-yellow-500 font-semibold hover:underline"
                                                onClick={() => handleEdit(item)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="text-red-600 font-semibold hover:underline"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex items-center justify-center h-[459px] bg-white rounded-xl shadow-inner">
                    <h1 className="text-2xl font-semibold text-gray-500">
                        No Data Found
                    </h1>
                </div>
            )}
        </div>
    );
};

export default UserList;
