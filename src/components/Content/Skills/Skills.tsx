import { SkillLevel } from "./SkillLevel/SkillLevel";
import style from "./Skills.module.css";

export function Skills() {

    const skills = [
        { subject: "HTML", level: 9},
        { subject: "CSS", level: 8},
        { subject: "SCSS", level: 7},
        { subject: "JavaScript", level: 8},
        { subject: "TypeScript", level: 4},
        { subject: "Git", level: 6},
        { subject: "Webpack", level: 5},
        { subject: "MobX", level: 6},
        { subject: "React", level: 6}
    ];

    const arrSkills = skills.map((elem, index) => {
        return <div key={index} className={style.skill_item}>{elem.subject}:</div>
    });

    const lvlSkills = skills.map((elem, index) => {
        return <SkillLevel key={index} value={elem.level}/>
    });

    return (
        <div className={style.conteiner}>
            <div>
                <h2 className="orange">Skills:</h2>
            </div>
            <div className={style.list_skills}>
                <div className="orange">
                    &#123;
                </div>
                <div>
                    { arrSkills }
                </div>
                <div className="orange">
                    &#125;
                </div>
            </div>
            <div className={style.level}>
                { lvlSkills }
            </div>
        </div>
    );
};