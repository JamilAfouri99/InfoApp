import classes from './Contact_Us_Form.module.css'
import Card from './Card/Card'
import Form from './Form/Form'
import {useState} from 'react'

const Contact_Us_Form=()=>{
    const [name,setName]=useState('')
    const [link,setLink]=useState('')
    const [image,setImage]=useState('')
    const [country,setCountry]=useState('')
    const [city,setCity]=useState('')

    const handleName=($name)=>{
        setName($name)
    }
    const handleImage=($image)=>{
        setImage($image)
    }
    const handleLink=($link)=>{
        setLink($link)
    }
    const handleCountry=($country)=>{
        setCountry($country)

    }
    const handleCity=($city)=>{
        setCity($city)
    }

    return(
        <div className={`${classes.Contact_Us_Form}`}>
            <div className="container">
                <div className='row'>
                    <div className={`col-md-6 col-sm-12 ${classes.formBox}`}>
                        <Form name={handleName} link={handleLink} image={handleImage} country={handleCountry} city={handleCity}/>
                    </div>
                    <div className={`col-md-6 col-sm-12 ${classes.dataBox}`}>
                        <Card name={name} link={link} image={image} country={country} city={city}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_Us_Form