import React from 'react'

const SkillCard = (props) => {
    const cardChildren = props.children
    return (
        <div className="text-center bg-gray-800 p-2.5 rounded-xl">
            {cardChildren}
        </div>
    )
}


export default SkillCard