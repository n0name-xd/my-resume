import style from "./Languages.module.css";

export function Languages() {
    return (
        <div>
            <div>
                <h3 className="orange">Languages:</h3>
            </div>
            <div className={style.languags_items}>
                <div className="white"><span className="violet">Russian:</span> native</div>
                <div className="white"><span className="violet">English:</span> elementary</div>
            </div>
        </div>
    );
};