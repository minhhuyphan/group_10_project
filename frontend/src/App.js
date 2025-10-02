import React, { useState } from "react";
import "./App.css";
import UserList from "./UserList";
import AddUser from "./AddUser";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUserAdded = () => {
    // Force refresh UserList component
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quản lý người dùng</h1>
      </header>

      <main className="App-main">
        <div className="container">
          <div className="section">
            <AddUser onUserAdded={handleUserAdded} />
          </div>

          <div className="section">
            <UserList key={refreshKey} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
