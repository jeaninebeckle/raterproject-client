import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
    const [ designers, setDesigners ] = useState([])
    const [ categories, setCategories ] = useState([])

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
    

    return (
        <GameContext.Provider value={{ games, designers, categories, getGames, createGame, getDesigners, getGameById, getCategories }} >
            { props.children }
        </GameContext.Provider>
    )
}
