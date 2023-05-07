import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Tweet from  "./components/Tweet";
import axios from "axios";


const SingleTweet =() =>{
    const [tweet, setTweet] = useState(null);
    const {id} = useParams();
    const fetchTweet = asunc() => {
        const resp  = await axios.get(
            `https://react-workshop-todo.gly.dev/posts/${id}`,
            {
                headers: {
                    apiKey: "6456f92a7213f63d43f028f8",
                },
            }
        );
        console.log(resp.data);
        setTweet(resp.data.post);
    };
    
}