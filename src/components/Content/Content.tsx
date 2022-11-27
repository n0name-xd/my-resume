import { AboutMe } from "./AboutMe/AboutMe";
import { AboutThisProject } from "./AboutThisProject/AboutThisProject";
import { Contacts } from "./Contacts/Contakts";
import style from "./Content.module.css";
import { Experience } from "./Expiriens/Experience";
import { Feedback } from "./Feedback/Feedback";
import { Languages } from "./Languages/Languages";
import { Links } from "./Links/Links";
import { Skills } from "./Skills/Skills";

export function Content() {
    return (
        <div className={style.conteiner}>
            <div>
                <h1 className="orange">Grinchuk_Evgeny_Evgenievich</h1>
            </div>
            <div className="darkBlue">
                Frontend Developer
            </div>
            <Contacts />
            <Skills />
            <AboutMe />
            <Experience />
            <Languages />
            <Feedback />
            <Links />
            <AboutThisProject />
        </div>
    );
};