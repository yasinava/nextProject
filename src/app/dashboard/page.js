"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

const dashboard = () => {
  const router = useRouter();
  const session = useSession();
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    axios
  );
  if (isLoading) {
    return <p>loading....</p>;
  }
  const postData = data.data;

  if (session.status === "loading") {
    return <div>loading...</div>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = URL.createObjectURL(e.target[2].files[0]);
    const content = e.target[3].value;

    try {
      console.log(desc);
      await axios.post("/api/posts", {
        title,
        desc,
        img,
        content,
        username: session.data.user.name,
      });
      mutate();
    } catch (error) {
      console.log(error + "error adadadadadadadadadadadash");
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="dashboardContainer">
        <div className="posts">
          {isLoading
            ? "loading...."
            : postData?.map((post) => (
                <div className="post" key={post._id}>
                  <div className="post-img">
                    <Image
                      src={post.img}
                      alt="post image"
                      width={300}
                      height={300}
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <span>X</span>
                </div>
              ))}
        </div>
        <form onSubmit={submitHandler}>
          <h1>Create New Post</h1>
          <input type="text" placeholder="title" />
          <input type="text" placeholder="desc" />

          <textarea placeholder="Content" cols={30} rows={10}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
};

export default dashboard;
