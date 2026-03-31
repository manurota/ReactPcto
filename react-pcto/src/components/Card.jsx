function Card({title, description, imgUrl}){
    return(
        <>
            <div className="">
                <h1>{title}</h1>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <img src={imgUrl} alt="" />
            </div>
        </>
       



    )



}
export default Card