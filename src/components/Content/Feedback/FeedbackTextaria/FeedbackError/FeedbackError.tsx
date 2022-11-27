import style from "./FeedbackError.module.css";

export function FeedbackError(prop: any) {
    return (
        <div className={style.box}>
            <p className="red">{prop.text}</p>
        </div>
    );
};