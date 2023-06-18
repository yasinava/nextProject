"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

const blog = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      return await axios.get("/api/posts").then((res) => setData(res.data));
    };
    getData();
  }, []);
  if (!data) {
    return <div>loading.....</div>;
  }
  console.log(data);
  return <div></div>;
};

export default blog;
