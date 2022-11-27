import emailjs from "@emailjs/browser";

export function sendEmail(event: any, ref: any) {
    event.preventDefault();

    emailjs.sendForm(
        String(process.env.REACT_APP_SERVICE_ID),
        String(process.env.REACT_APP_TEMPLATE_ID),
        ref,
        process.env.REACT_APP_USER_ID 
    ).then(
        result => console.log(result.text),
        error => console.log(error)
    );
};