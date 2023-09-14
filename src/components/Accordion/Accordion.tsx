import React from "react";

function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody title={props.titleValue}/>
        </div>
    );
}

function AccordionTitle(props: any) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}

function AccordionBody(props: any) {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    );
}

export default Accordion;