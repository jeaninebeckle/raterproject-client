import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
    const [ designers, setDesigners ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ reviews, setReviews ] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }

    const getGameById = (id) => {
      return fetch(`http://localhost:8000/games/${id}`, {
          headers:{
              "Authorization": `Token ${localStorage.getItem("lu_token")}`
          }
      })
          .then(response => response.json())
          .then(setGames)
  }

    const getDesignerById = (id) => {
      return fetch(`http://localhost:8000/designers/${id}`, {
          headers:{
              "Authorization": `Token ${localStorage.getItem("lu_token")}`
          }
      })
          .then(response => response.json())
          .then(setDesigners)
  }

    const getReviewsById = (id) => {
        return fetch(`http://localhost:8000/reviews/${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const getDesigners = () => {
      return fetch("http://localhost:8000/designers", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("lu_token")}`
          }
      })
          .then(response => response.json())
          .then(setDesigners)
  }

    const getCategories = () => {
      return fetch("http://localhost:8000/categories", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("lu_token")}`
          }
      })
          .then(response => response.json())
          .then(setCategories)
  }

    const getReviews = () => {
        return fetch("http://localhost:8000/reviews", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const createGame = (game) => {
        return fetch("http://localhost:8000/games", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
         })
            .then(res => res.json())
            .then(() => {
                
            })
    }

    const createReview = (review) => {
        return fetch("http://localhost:8000/reviews", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
         })
            .then(res => res.json())
            .then(() => {
                
            })
    }
    

    return (
        <GameContext.Provider value={{ games, designers, categories, reviews,
        getGames, createGame, getDesignerById, getDesigners, getGameById, 
        getCategories, setReviews, createReview, getReviews, getReviewsById }} >
            { props.children }
        </GameContext.Provider>
    )
}
