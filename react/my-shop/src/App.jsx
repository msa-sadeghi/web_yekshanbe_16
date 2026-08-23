import { createContext, useContext, useState } from "react";
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "amir",
    role: "admin",
  });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout />
      </UserContext.Provider>
    </>
  );
}

export default App;

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

function Header() {
  return <UserMenu />;
}
function Sidebar() {
  return <h3>Sidebar</h3>;
}

function UserMenu() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
