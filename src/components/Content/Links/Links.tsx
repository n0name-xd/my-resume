import style from "./Links.module.css";

export function Links() {
    return (
        <div>
            <div>
                <h3 className="orange">Links:</h3>
            </div>
            <div className={style.description}>
                <p>
                    <a href="https://github.com/n0name-xd"
                        className={style.link}
                        target="_blank"
                    >My GitHub</a> Some of my work on layout and React.
                </p>
            </div>
        </div>
    );
};