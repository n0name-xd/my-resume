import style from "./Photo.module.css";

export function Photo() {
    return (
        <div className={style.photo}>
            <div className="red">
                &#x2039;pre&#x203A;
            </div>
            <div>
                <img src="https://vjoy.cc/wp-content/uploads/2020/04/50059_19633152-7566413-image-a-56_1570908569851.jpg" alt="photo" />
            </div>
            <div className="red">
                &#x2039;/pre&#x203A;
            </div>
        </div>
    );
};