import React, { useState, useEffect } from 'react'
import './ProfileForm.css'
import fisrtNameIcon from '../Images/fisrtNameIcon.svg'
import lastNameIcon from '../Images/lastNameIcon.svg'
import displayIcon from '../Images/displayIcon.svg'
import atIcon from '../Images/atIcon.svg'
import mailIcon from '../Images/mailIcon.svg'
import locationIcon from '../Images/locationIcon.svg'
import bottomArrow from '../Images/bottomArrow.svg'

const ProfileForm = () => {

const [countries, setCountries] = useState([])
const [selectedCountry, setSelectedCountry] = useState();

const getCountries = async() => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const data= await response.json()
  setCountries(data)
}

useEffect(() => {
  getCountries()
}, [])

console.log(countries)

 //Find selected country data
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });

  return (
    <div className='bh-profileForm'>
        <p className='formTitle'>Personal Information</p> 
        <form action=''>
          <div className="topFormInfo">
            <div className='bh-inputContainer'>
               <img src={fisrtNameIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='First Name' name="firstName"/>
            </div>

            <div className='bh-inputContainer'>
               <img src={lastNameIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='Last Name' name="lastName" />
            </div>

            <div className='bh-inputContainer'>
               <img src={displayIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='Display Name' name="displayName"/>
            </div>

            <div className='bh-inputContainer'>
               <img src={atIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='User Name' name="userName"/>
            </div>
          </div> {/*End topFormInfo */}
          
           <p className='contactTitle'>Contact Info</p> 

          <div className="contactWrapper">
             <div className='bh-inputContainer'>
               <img src={mailIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder="Email Address" name="email"/>
             </div> {/*End bh-inputContainer */}

             <div className='bh-inputContainer'>
               <img src={atIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder="Currency" name="currency"/>
             </div> {/*End bh-inputContainer */}

             <div className='bh-selectLocation'>
               <img src={locationIcon} alt="inputIcon" />
               <span></span>
               <select className='selectBox' value={selectedCountry}
                       onChange={(e) => setSelectedCountry(e.target.value)}>
                  <option hidden>Location</option>
                  {
                    countries.map((item,index) => (
                      <option key={index} value={item.name.common}>{item.name.common}</option>
                    ))
                  }
               </select>
               <div className="selectIcon">
                     <img src={bottomArrow} alt="bottomArrow" />
               </div>
             </div> {/*End bh-selectLocation */}

             <div className='bh-selectPhone'>
                 <img 
                     src={searchSelectedCountry ? searchSelectedCountry.flags.png : 'https://flagcdn.com/w320/sy.png'}
                     alt="countryFalg"
                     className='countryFalg'/>

                 <p className='phoneNumPara'>
                    {
                      searchSelectedCountry ? searchSelectedCountry.idd.root + searchSelectedCountry.idd.suffixes : "+963"
                    }
                 </p>
                 
                 <input
                        type="tel"
                        placeholder="Phone Number"
                        className='phoneNumInput'
                        />
                 
             </div> {/*End bh-selectPhone */}

          </div> {/*End contactWrapper */}

           <div className="rowOfBtns">
              <div className="dateContainer">
                 <p className="dateLabel">Account Created at :</p>
                 <p className='accountDate'>Tuesday - 2022 30 August</p>
              </div>
              <div className="btnContainer">
                <button className='cancelBtn'>Cancel</button>
                <button className='saveBtn' type='submit'>Save Changes</button>
              </div>
           </div>
        </form>
        
    </div>
  )
}

export default ProfileForm
        