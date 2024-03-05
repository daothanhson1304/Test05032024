import useUser from "../../../hooks/useUser";

/* eslint-disable react/prop-types */
export default function SearchUserInput() {
  const { searchUser, setSearchUser } = useUser();
  const onChange = e => {
    setSearchUser(e.target.value);
  };
  return (
    <input
      className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
      type="text"
      placeholder="Search user"
      value={searchUser}
      onChange={onChange}
    />
  );
}
