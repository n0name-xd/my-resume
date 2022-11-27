import React, { useRef, useState } from "react";
import { sendEmail } from "./functions/sendEmail";
import { validateEmail } from "./functions/validateEmail";
import style from "./FeedbackTextaria.module.css";
import { FeedbackError } from "./FeedbackError/FeedbackError";

export function FeedbackTextaria() {

    const arrClassesButton = [style.button_submit, "blue"];

    const [hover, setHover] = useState(true);
    function addClassForButton() {
        if (!hover) {
            arrClassesButton.push(style.hover)
        };
    };
    addClassForButton();

    const form = useRef<any>();

    const [textareaValue, setTextareaValue] = useState<string>("");
    const [valueEmail, setValueEmail] = useState<string>("");
    const [valueEmailError, setValueEmailError] = useState<string>("");
    const [valueTextariaError, setValueTextariaError] = useState<string>("");
    const [showForm, setShowForm] = useState<boolean>(true);

    function sandDataForm(event: any, form: any) {
        event.preventDefault();

        if (textareaValue.length < 10) {
            setValueTextariaError("You cannot send a message with less than 10 characters")
            return;
        };

        if (!validateEmail(valueEmail)) {
            setValueEmailError("Incorrect email");
            return;
        };

        sendEmail(event, form);
        setTextareaValue("");
        setValueEmail("");    

        setValueEmailError("");
        setValueTextariaError("");

        setTimeout(() => setShowForm(false), 50);

        };

    return (
        <div>

            { showForm && <form ref={form} onSubmit={event => sandDataForm(event, form.current)} >
                <div className={style.conteiner__flex}>
                    <textarea name="message"
                        className={style.textarea}
                        value={textareaValue}
                        onChange={event => setTextareaValue(event.target.value)}
                        onFocus={() => setTextareaValue("")}
                        required
                    ></textarea>
                    <FeedbackError text={valueTextariaError}/>
                </div>
                <div className={style.conteiner__flex}>
                    <input type="text"
                        name="email"
                        className={style.to_email}
                        value={valueEmail}
                        onChange={event => setValueEmail(event.target.value)}
                        onFocus={() => setValueEmail("")}
                        required
                    />
                    <FeedbackError text={valueEmailError}/>
                </div>
                <div>
                    <input type="submit"
                        className={arrClassesButton.join(" ")}
                        value="Send"
                        onMouseEnter={() => setHover(false)}
                        onMouseLeave={() => setHover(true)}
                    />
                </div>
            </form> }

            { !showForm && <div className={style.textarea}>
                <p className="red">Thank you for your feedback</p>
                <p className="red">If you forgot to add something, my email and phone number are in contacts.</p> 
            </div>}

        </div>
    );
};