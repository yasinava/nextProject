import connect from "@/utils/db";
import posts from "@/models/posts";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.username;

  try {
    await connect();
    const Post = await posts.find(username && { username });

    return NextResponse.json(Post, { status: 200 });
  } catch (error) {
    return NextResponse.json("error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  console.log(body);
  const newPost = new posts(body);
  console.log(newPost);

  try {
    await connect();

    await newPost.save();
    console.log("ok is coming body model its connect to db saved post");

    return NextResponse.json("new post created", { status: 201 });
  } catch (error) {
    return NextResponse.json("error", { status: 500 });
  }
};
