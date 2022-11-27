import style from "./Import.module.css";

export function Import() {
    return (
        <div>
            <code>
                <span className="blue">
                    import
                    </span> * <span className="blue">
                    from
                    </span> "
                    <a href="https://learn.javascript.ru/"
                          className={style.link}
                          target="_blank"
                    ><span className="green">
                    ./
                    </span></a> 
                    ";
            </code>
        </div>
    );
};