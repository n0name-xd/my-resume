import style from "./Header.module.css";
import { Import } from "./Import/Import";
import { Photo } from "./Photo/Photo";

export function Header() {
    return (
        <div className={style.conteiner}>
            <Import />
            <Photo />
        </div>
    );
};