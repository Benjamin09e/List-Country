import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './App.css'


const App = () => {

  const [liste, setListe] = useState("")

  const [valeur, setValeur] = useState("")

  const [select, setSelect] = useState("")

  const filtre =({currentTarget}) =>{
    setValeur(currentTarget.value)
    setListe(countryList.filter(word => word.toLowerCase().includes(currentTarget.value)))

  }

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territo"]

  return (
    <div className="background d-flex justify-content-center" >
        <div className= "form col-4 p-3 m-2" >
         <p>Type the name of a country to search</p> 
          <Form.Control className="mb-5" type="text" onChange={filtre} id="inputText" aria-describedby="textdHelpBlock"/>
          {
            valeur ==""?(<div></div>):(
              
            <div className="border">
              <h1>Showing {liste.length} of {countryList.length} </h1>
              <hr />
                <div className="plus"> {liste.map(liste =>(
                <p key={liste}>{liste}</p>
               ))}
                </div>
            </div>
             
            
          
            )
          }
          
        
        </div >
      </div>
  )
}

export default App