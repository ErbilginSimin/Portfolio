import React from "react";
import "./Skills.scss";
import SeasonMenu from "../SeasonMenu/SeasonMenu";

function Skills () {
    return (
        <section id="Skills" className="relative size-full h-52 md:h-96 lg:h-120 xl:h-144 flex flex-col lg:px-12">
            <div>
            <h2 className="Skills-title uppercase text-4xl font-semibold mb-4 ">Projets</h2>
            </div>
            {/* <SeasonMenu /> */}
        </section>
    );
}

export default Skills;