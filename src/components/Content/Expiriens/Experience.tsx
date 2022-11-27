import style from "./Experience.module.css";

export function Experience() {
    return (
        <div>
            <div>
                <h3 className="orange">Experience:</h3>
            </div>
            <div>
                <div className={style.title}>
                    <span className="violet">Internship:</span>
                </div>
                <div className={style.description}>
                    <p className="white">In the spring of 2022, i completed a 3-month internship at a local company. 
                    Technology stack: HTML, CSS, Javascript, Git, Webpack, React, MobX. i completed the internship in full, 
                    and completed all the intermediate tasks, including the control project. 
                    There was not enough at the final interview.</p>
                </div>
            </div>
        </div>
    )
}