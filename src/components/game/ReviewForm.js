import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"


export const ReviewForm = props => {
    const { createReview, games, getReviews } = useContext(GameContext)

    const [currentReview, setCurrentReview] = useState({
        description: "Tell me how you REALLY feel about it",
    })

    useEffect(() => {
        getReviews()
    }, [])

    const handleControlledInputChange = (event) => {
        const newReviewState = Object.assign({}, currentReview)
        newReviewState[event.target.name] = event.target.value
        setCurrentReview(newReviewState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        defaultValue={currentReview.description}
                        onChange={handleControlledInputChange}
                        
                    />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const review = {
                        description: currentReview.description,
                        gameId: games.id
                    }

                    // Send POST request to your API
                    createReview(review)
                    props.history.push({ pathname: `/games/${games.id}` })
                }}
                className="btn btn-primary">Add Review</button>
        </form>
    )
}
