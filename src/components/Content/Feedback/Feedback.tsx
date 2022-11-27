import style from "./Feedback.module.css";
import { FeedbackTextaria } from "./FeedbackTextaria/FeedbackTextaria";

export function Feedback() {

    return (
        <div>
            <div>
                <h3 className="orange">Feedback:</h3>
            </div>
            <div className={style.construction}>
                <div>
                    <span className="violet">if (</span><span className="white">you want to send me email</span><span className="violet"> <span className="blue">||</span> <span className="white">make an offer</span>) {"{"}</span>
                </div>
                <div className={style.form}>
                    <FeedbackTextaria />
                </div>
                <div>
                    <span className="violet">{"}"}</span>
                </div>
            </div>
        </div>
    );
};