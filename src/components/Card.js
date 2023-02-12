import React from 'react'

const Card = (props) => {
    const cardChilds = props.children
    const cardId = props.id
    const cardClasses = props.className
    return (
        <div className={`p-5 px-5 lg:px-20 w-100 ${cardClasses || ''}`} id={cardId}>
            {cardChilds}
        </div>
    )
}

const CardHeader = (props) => {
    const cardHeaderChilds = props.children
    const cardHeaderClasses = props.className
    return (
        <p className={`text-2xl text-center font-bold p-3 rounded-3xl bg-gray-800 ${cardHeaderClasses || ''}`}>
            {cardHeaderChilds}
        </p>
    )
}

const CardMain = (props) => {
    const cardMainChilds = props.children
    const cardMainClasses = props.className
    return (
        <div className={`container flex mt-4 w-100 mx-auto ${cardMainClasses || ''}`}>
            {cardMainChilds}
        </div>
    )
}

export {Card, CardHeader, CardMain}