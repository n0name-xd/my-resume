import style from "./Contacts.module.css";

export function Contacts () {
    return (
        <div>
            <h2 className="orange">Contacts:</h2>
            <div className={style.contakts_tel}>
                <div>
                    <div className={style.contakts_tel}>
                        <span className="violet">Email:</span><span style={{color: "white"}}>n0name-xd@inbox.ru</span>
                    </div>
                </div>
                <div style={{padding: "0px 0px 0px 40px"}}>
                    <span className="violet">Tel:</span><span style={{color: "white"}}>+7 960 88 69 396</span>
                </div>
            </div>
        </div>
    );
};