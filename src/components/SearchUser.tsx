import React, { useEffect, useState } from "react";
import Users from "./Users";

const SearchUser: React.FC = () => {
  const [query, setQuery] = useState("");
  const FilterUsers = Users.filter((user) =>
    user.login.toLocaleLowerCase().includes(query)
  );

  return (
    <div className="Wrapper">
      <div className="SearchBox">
        <input
          type="text"
          placeholder="Search"
          className="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="ResultsWrapper">
        {FilterUsers.map((user) => (
          <div className="ListItem" key={user.id}>
            <img className="UserAvatar" src={user.avatar_url} alt="avatar" />
            <p>{user.login}</p>
            <button className="MoreDetails">User Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUser;
