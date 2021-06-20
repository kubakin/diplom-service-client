import React from 'react';
import SomeSite from "../components/siteOfProject";

function Projects(props) {
    const {sites} = props; 
    const lst = sites.map((item, key)=> {
        return (
                <SomeSite item={item} key={key}/>
        )
    })
    return (
        <div className='siteList' justify='space-between'>
            {lst}
        </div>
    );
}

export default Projects;
