import useUser from "../../../hooks/useUser";

/* eslint-disable react/prop-types */
export default function Users() {
  const { users, loading, error } = useUser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="bg-gray-200">
          <tr className="text-center">
            <th className="px-4 py-2 sm:px-6 md:px-8">Name</th>
            <th className="px-4 py-2 sm:px-6 md:px-8">Email</th>
            <th className="px-4 py-2 sm:px-6 md:px-8">Phone</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map(user => {
            const { id, name, email, phone } = user;
            return (
              <tr key={id}>
                <td className="border px-4 py-2 sm:px-6 md:px-8">{name}</td>
                <td className="border px-4 py-2 sm:px-6 md:px-8">{email}</td>
                <td className="border px-4 py-2 sm:px-6 md:px-8">{phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
