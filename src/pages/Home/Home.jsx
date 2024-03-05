import SearchUserInput from "./components/SearchUserInput";
import Users from "./components/Users";

export default function Home() {
  return (
    <div>
      <div className="pb-3">
        <SearchUserInput />
      </div>
      <Users />
    </div>
  );
}
