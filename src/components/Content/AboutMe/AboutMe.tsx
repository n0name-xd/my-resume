import style from "./AboutMe.module.css";

export function AboutMe() {
    return (
        <div>
            <div>
                <h3 className="orange">About me:</h3>
            </div>
            <div className={style.description}>
                <p className="white">
                I'm 34. I am a beginner Frontend Developer. With great motivation, I study every day. 
                At the moment, in search of a company that will take on an internship or training, for its part, 
                I am ready to give my best 100%. I live in Volgograd.
                </p>
            </div>
        </div>
    );
};