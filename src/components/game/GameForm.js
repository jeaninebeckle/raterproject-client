import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"


export const GameForm = props => {
    const { createGame, getCategories, categories } = useContext(GameContext)

    const [currentGame, setCurrentGame] = useState({
        ageRecommendation: 10,
        numberOfPlayers: 0,
        title: "Uno",
        designer: 'Someone',
        categoryId: 0,
        gameImage: "www.google.com",
        yearReleased: 2020
    })


    useEffect(() => {
        getCategories()
    }, [])

    /*
        Update the `currentGame` state variable every time
        the state of one of the input fields changes.
    */
    const handleControlledInputChange = (event) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[event.target.name] = event.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        defaultValue={currentGame.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        defaultValue={currentGame.designer}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input type="text" name="numberOfPlayers" required autoFocus className="form-control"
                        defaultValue={currentGame.numberOfPlayers}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameImage">Game Image URL: </label>
                    <input type="text" name="gameImage" required autoFocus className="form-control"
                        defaultValue={currentGame.gameImage}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yearReleased">Year Released: </label>
                    <input type="text" name="yearReleased" required autoFocus className="form-control"
                        defaultValue={currentGame.yearReleased}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimatedTimeToPlay">Estimated Time To Play: </label>
                    <input type="text" name="estimatedTimeToPlay" required autoFocus className="form-control"
                        defaultValue={currentGame.estimatedTimeToPlay}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ageRecommendation">Age Recommendation: </label>
                    <input type="text" name="ageRecommendation" required autoFocus className="form-control"
                        defaultValue={currentGame.ageRecommendation}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryId">Category: </label>
                    <select name="categoryId" id="categories" defaultValue={currentGame.categoryId} onChange={handleControlledInputChange}>
                      {
                        categories.map(category => {
                          return <option value={category.id} key={category.id}>{category.label}</option>
                        })
                      }
                    </select>
                </div>
            </fieldset>



            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        designer: currentGame.designer,
                        title: currentGame.title,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        estimatedTimeToPlay: parseInt(currentGame.estimatedTimeToPlay),
                        ageRecommendation: parseInt(currentGame.ageRecommendation),
                        gameImage: currentGame.gameImage,
                        yearReleased: currentGame.yearReleased
                        // categoryId: parseInt(currentGame.categoryId)
                    }

                    // Send POST request to your API
                    createGame(game)
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}
