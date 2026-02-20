import { useState } from "react"

function Reviews(){
    
    const reviews = [
        {
            id:1,
            image:"https://randomuser.me/api/portraits/men/78.jpg",
            name:"Alex Tomato",
            position:"Brand Manager at Instant Design",
            star:5,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae ad dignissimos consectetur ipsam maxime placeat quis omnis, odio quaerat alias pariatur cupiditate temporibus doloribus qui eligendi soluta. Corporis nihil quia fuga esse eius labore aperiam, et minus similique ratione!"
        },
        {
            id:2,
            image:"https://randomuser.me/api/portraits/women/84.jpg",
            name:"Sara Bloom",
            position:"Founder of Bloom Agency",
            star:4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae ad dignissimos consectetur ipsam maxime placeat quis omnis, odio quaerat alias pariatur cupiditate temporibus doloribus qui eligendi soluta. Corporis nihil quia fuga esse eius labore aperiam, et minus similique ratione!"
        },
        {
            id:3,
            image:"https://randomuser.me/api/portraits/men/76.jpg",
            name:"John Park",
            position:"CEO of Pixel",
            star:3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae ad dignissimos consectetur ipsam maxime placeat quis omnis, odio quaerat alias pariatur cupiditate temporibus doloribus qui eligendi soluta. Corporis nihil quia fuga esse eius labore aperiam, et minus similique ratione!"
        },
    ]

    const [index, setIndex] = useState(0)
    
    const [direction, setDirection] = useState(null)

    const checkNumber = (number) => {
        if(number > reviews.length - 1) return 0
        if(number < 0) return reviews.length - 1
        return number 
    }

    const nextReview = () => {
        setDirection("next")
        setIndex(prev => checkNumber(prev + 1))
    }

    const previousReview = () => {
        setDirection("prev")
        setIndex(prev => checkNumber(prev - 1))
    }
    
    const {image, name, position, star, review} = reviews[index]
    
    
    return(
        <div className="reviews" id="reviews">
            <span className="span-box"><i className="fa-solid fa-star"></i> Reviews</span>
            <h1>What Clients Say About Me</h1>
            <div key={index} className="review-box">
                <div className={`review-content ${direction}`}>
                <img src={image} className="review-img" />
                <h3 className="review-name">{name}</h3>
                <span className="position">{position}</span>
                <div className="rating">
                    {Array.from({length:5},(_,i) => (
                        <i 
                        key={i}
                        className={i < star ? "fa-solid fa-star" : "fa-regular fa-star"}
                        ></i>
                    ))}

                </div>
                <p className="review">{review}</p>
                <div className="review-project">
                    <span>Project</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
            </div>
            <div className="change-btn">
                <button className="review-btn" onClick={previousReview}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="review-btn" onClick={nextReview}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Reviews