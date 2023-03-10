import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../../data';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);
    console.log(blogs);
    const sliceString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        }
        else {
            return str;
        }
    }
    return (
        <div>
            <h1>Blogs</h1>
            <section>
                {
                    blogs.map(blog => {
                        const { id, title, body } = blog;
                        return <article key={id}>
                            <h3>{title}</h3>
                            <p>{sliceString(body, 100)}</p>
                            <Link to={title}>Learn More</Link>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;