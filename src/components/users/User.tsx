import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";

const API: string = "https://dummyjson.com";

interface UserSchema {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
}

const User: React.FC = () => {
  const [userData, setUserData] = useState<null | UserSchema[]>(null);

  useEffect(() => {
    axios
      .get(`${API}/users`, { params: { limit: 4 } })
      .then((res) => setUserData(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  const users: JSX.Element[] | undefined = userData?.map((el: UserSchema) => (
    <div key={el.id} className="user__card">
      <img src={el.image} alt={el.firstName} />
      <h3 className="user__text">
        {el.firstName} {el.lastName}
      </h3>
      <p className="user__par">{el.email}</p>
    </div>
  ));
  return (
    <div>
      <section className="user">
        <div className="container">
          <h1 className="user__title">Meet our team</h1>
          <div className="user__cards">{users}</div>
        </div>
      </section>
    </div>
  );
};

export default User;
