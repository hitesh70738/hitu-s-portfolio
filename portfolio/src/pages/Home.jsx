import React from "react";
import './Home.css'

function Home () {
    return (
        <div className="container text-center py-5 px-3 mx auto home-container">
            <h1>Hitesh Patel</h1>
            <img src="https://png.pngtree.com/background/20230528/original/pngtree-an-animated-face-of-a-boy-with-headphones-picture-image_2781319.jpg" alt="profile picture" />
            <p>Welcome to my Portfolio. You will get to see the projects I have worked on</p>
        
            <footer className="my-5">
                <a href="https://github.com/hitesh70738" target="_blank" className="mx-5 text-warning">Github</a>
                <a href="https://www.linkedin.com/in/hitesh-patel-70738/" className="mx-5 text-warning">LinkdIn</a>
                <a href="mailto:hitesh70738@gmail.com" className="mx-5 text-warning">Email</a>
                <a href="./Hitesh.docx" download className="mx-5 text-warning">Resume</a>
            </footer>
        </div>
    )
}

export default Home;


