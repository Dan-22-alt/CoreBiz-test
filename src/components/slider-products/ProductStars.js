import React, { useEffect } from "react";
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';


const ProductStars = (props) => {

    useEffect(() => {
    }, [props])

    function startsFunction() {
        switch (props.stars) {
            case 1:
                return <div>

                    <AiFillStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                </div>
            case 2:
                return <div>

                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                </div>
            case 3:
                return <div>

                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                </div>
            case 4:
                return <div>

                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiOutlineStar className="star-icon" />
                </div>
            case 5:
                return <div>

                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                </div>
        }
    }


    return (
        <div>
            {startsFunction()}
        </div>
    )
}

export default ProductStars;