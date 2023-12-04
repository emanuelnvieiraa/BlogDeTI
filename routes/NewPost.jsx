import blogFetch from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./NewPost.css"
import React from 'react'

const NewPost = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const createPost = async (e) => {
      e.preventDefault();

      const post = {title, body, userId: 1};

      await blogFetch.post("/posts", {
        body: post
      });
      console.log("post criado com sucesso.")

    }


  return (
    <div className="new-post">
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
        <input type="text" name="title" id="title" placeholder="Insira o título" onChange={(e) =>setTitle(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
        <textarea name="body" id="body" placeholder="Insira o conteúdo" onChange={(e) =>setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Criar post" className="btn"></input>
      </form>
    </div>
  )
}

export default NewPost