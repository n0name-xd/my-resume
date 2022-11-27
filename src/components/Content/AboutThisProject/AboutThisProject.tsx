import style from "./AboutThisProject.module.css";

export function AboutThisProject() {
    return (
        <div>
            <div>
                <h3 className="orange">About this project:</h3>
            </div>
            <div className={style.text}>
                <p className="white">
                    This summary was done by me in React and Typescript.
                </p>
            </div>
        </div>
    );
};