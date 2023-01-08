import React, { useState } from 'react'
import axios from 'axios'
function Lectures() {
    const [lectures, setLectures] = useState([]);
    const [baseUrl, setBaseUrl] = useState('http://127.0.0.1:8000/lectures/');
    async function handleGet(){
        const response = await axios.get(baseUrl);
        setLectures(response.data)
        console.log(response.data);
    }
    async function handleCreate(){
        const response = await axios.post(baseUrl);
        console.log(response.data);
    }
    async function handleDelete(){
        const response = await axios.delete(baseUrl);
        setLectures([])
        console.log(response.data);
    }
    async function handleTogether(){
        await handleCreate();
        await handleGet();
        await handleDelete();
        await handleGet();
        await handleCreate();
        await handleGet();
        await handleGet();
        await handleGet();
        await handleGet();
        await handleGet();
        await handleGet();
    }
  return (
    <div>
        <button onClick={handleGet}>GET</button>
        <button onClick={handleCreate}>CREATE</button>
        <button onClick={handleDelete}>DELETE</button>
        <button onClick={handleTogether}>TOGETHER</button>
        {lectures.map((lecture : any) => (
            <div key={lecture.id}>
                <p>{lecture.id}</p>
                <p>{lecture.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Lectures