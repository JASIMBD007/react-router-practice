import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quia veniam cumque, enim delectus iure aperiam soluta non quisquam ipsa assumenda. Vitae repudiandae alias porro, autem adipisci, blanditiis, fugiat numquam facere ipsum consequatur voluptatum eius! Cupiditate voluptatem sed nam saepe dignissimos a, suscipit, blanditiis quisquam maiores et minima quas voluptas?
            </p>
            <button onClick={() => {
                navigate('/')
            }}>Go To Home</button>
        </div>
    );
};

export default Contact;