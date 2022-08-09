import { useState, useEffect } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(user);

  const getUser = async () => {
    console.log("Inside the getuser function ");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filterUser = e => {
    let filteredUsers = user
      .filter(user => {
        return user.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
      .sort((a, b) => {
        return a.id - b.id;
      })
      .reverse();
    setFilteredUsers(filteredUsers);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-col text-left w-1/2">
          {loading
            ? <div className="flex containter mx-0 p-5 justify-center">
                <div className="flex-col text-left w-1/2">
                  <div className="flex flex-col mb-5 mt-5">
                    <h1 className="text-2xl">Loading...</h1>
                  </div>
                </div>
              </div>
            : <div className="flex flex-col containter mx-0 p-5 justify-center">
                <input type="text" placeholder="Search" onChange={filterUser} />
                <div className="flex-col text-left w-1/2">
                  {filteredUsers.map(user => {
                    return (
                      <div className="flex flex-col mb-5 mt-5" key={user.id}>
                        <h1 className="text-2xl">
                          {user.name}
                        </h1>
                        <p className="text-base flex-wrap">
                          {user.email}
                        </p>
                        <p className="text-base flex-wrap">
                          {user.phone}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>}
        </div>
      </div>
    </div>
  );
}
