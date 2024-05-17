import React, {useState, useEffect} from "react";
import { useScramble } from "use-scramble";
import ReactMarkdown from 'react-markdown';

const fetchPost = async (postId) => {
  const response = await fetch(`/public/posts/${postId}.md`);
  const text = await response.text();
  return text;
};

const Blogs = () => {
  const [content, setContent] = useState('');
  const { ref } = useScramble({
    text: "tail -f /var/www/life.log",
    speed: 0.8,
    overflow: true,
    scramble: 20,
  });

  useEffect(() => {
    fetchPost('life').then(setContent);
  }, []);

  return (
    <div className="skills">
      <div className="banner">
        <h1> >_ &nbsp; </h1>
        <h1 style={{ width: "75%" }} ref={ref}>
          {" "}
        </h1>
      </div>

      <ReactMarkdown>{content}</ReactMarkdown>

    </div>
  );
};

export default Blogs;
