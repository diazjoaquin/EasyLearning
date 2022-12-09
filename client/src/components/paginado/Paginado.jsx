import React from "react";
import style from "./Paginado.module.css"


export default function Paginado({ recipePage, recipes, paginado, page }) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(recipes / recipePage); i++) {
        pages.push(i);

    }

    const prev = "<";
    const next = ">";

    return (
        <div className={style.bg}>
            <button type="button" onClick={() => paginado(page === 1 ? page : page - 1)}>
                {prev}
            </button>
            <div className={style.btn}>
                {pages?.map((n) => {
                    return (
                        <div key={n}>
                            <button type="buton" onClick={() => paginado(n)}>
                                {page === n ? "*" : n}
                            </button>
                        </div>
                    );
                })}
            </div>
            <button type="button" onClick={() => paginado(page === pages.length ? page : page + 1)}>
                {next}
            </button>
        </div>
    );
}