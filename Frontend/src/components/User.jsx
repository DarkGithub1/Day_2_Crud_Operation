import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const User = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/delete/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className=" bg-black h-screen flex items-center justify-center flex-col ">
        <div className="bg-gray-50 mb-2 rounded-sm w-10/12 text-center font-extrabold text-slate-950 text-2xl">
          <Link to="/Create">Add </Link>
        </div>
        <table className="w-10/12 bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-r">Id</th>
              <th className="py-2 px-4 border-b border-r">Name</th>
              <th className="py-2 px-4 border-b border-r">Price</th>
              <th className="py-2 px-4 border-b border-r">Description</th>
              <th className="py-2 px-4 border-b border-r">Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user,i) => {
              return (
                <tr key={i}>
                  <td className="py-2 px-4 border-b border-r text-center" >
                    {user.idd}
                  </td>
                  <td className="py-2 px-4 border-b border-r text-center" >
                    {user.name}
                  </td>
                  <td className="py-2 px-4 border-b border-r text-center" >
                  {"Rs "+user.price}
                  </td>
                  <td className="py-2 px-4 border-b border-r text-center" >
                    {user.desc}
                  </td>
                  <td className="py-2 px-4 border-b border-r text-center">
                    <Link
                      to={`/Update/${user._id}`}
                      className="ml-4 mt-2 bg-black text-white rounded-md inline-block w-3/6"
                    >
                      Edit
                    </Link>
                    <button
                      className="ml-4 mt-2 bg-black text-white w-3/6 rounded-md"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
