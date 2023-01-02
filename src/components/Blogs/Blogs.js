import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../../data';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);
    console.log(blogs);

    return (
        <div>
            <h1>Blogs</h1>
            <section>
                {
                    blogs.map(blog => {
                        const { id, title, body } = blog;
                        return <article key={id}>
                            <h3>{title}</h3>
                            <p>{body}</p>
                            <Link to=''>Learn More</Link>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;