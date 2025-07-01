"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/posts")
      .then((res) => res.json())
      .then(setPosts); // 비동기로 실행
  }, []);

  return (
    <>
      <h1>
        글 목록
        <br />
        {posts.length == 0 && <div>로딩중 ...</div>}
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </h1>
    </>
  );
}
