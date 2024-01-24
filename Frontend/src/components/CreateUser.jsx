import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const [idd, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const Navigation = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/createUser", {
        idd,
        name,
        price,
        desc,
      })
      .then((data) => {
        console.log(data);
        Navigation("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className=" bg-black h-screen flex items-center justify-center flex-col">
      <form className="bg-white p-8 rounded shadow-md w-8/12" onSubmit={Submit}>
        <h2 className="text-2xl font-semibold mb-6">Simple Form</h2>

        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Id
          </label>
          <input
            type="number"
            id="id"
            name="id"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="143"
            required
            onChange={(e) => setId(e.target.value)}
            autoComplete="on"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your Product Name"
            required
            onChange={(e) => setName(e.target.value)}
            autoComplete="on"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="your price"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="desc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="desc"
            name="desc"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="product description"
            required
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600 w-5/12 text-lg"
          >
            ADD Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
