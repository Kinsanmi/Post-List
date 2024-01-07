import React from 'react';
import { useState } from 'react-vis';


async function getData() {
    const res = await fetch("");

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }

    return res.json();
}


const PostList = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.desc}</h3>
    </div>
  )
}

export default PostList
