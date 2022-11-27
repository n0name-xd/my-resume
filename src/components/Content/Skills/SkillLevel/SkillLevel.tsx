import style from "./SkillLevel.module.css";

export function SkillLevel(prop: any) {
    return (
        <div className={style.box_lvl}>
            <div style={{width: `${prop.value * 10}%`}} 
                className={style.level}
                >
                </div>
        </div>
    );
};