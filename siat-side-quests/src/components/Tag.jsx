export const Tag = ({category, isRed
}) =>{
    const redTag= <p className="red-tag red-text"> {category} </p>
    const grayTag= <p className="gray-tag lightgray-text"> {category} </p>

    return(
        <>
            <div className="tag">
                {isRed? redTag: grayTag} 
            </div>
        </>
    )
}

export default Tag