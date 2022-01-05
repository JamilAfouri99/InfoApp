import classes from './Form.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store';
const Form = (props) => {
    const dispatch = useDispatch()
    const [Locations, setLocations] = useState([]);
    const [country, setCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');
    const [errorCountry, setErrorCountry] = useState(null);
    const [errorCity, setErrorCity] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorLink, setErrorLink] = useState(null);
    const [errorImage, setErrorImage] = useState(null);
    const [btnIsActive, setBtnIsActive] = useState(false);

    // Start fetch data from API 
    const getData = async () => {
        try {
            const removeCountries=['United Kingdom','United States','Jordan','Kenya','Japan']                   // You can add manually the country that you don't wanna dispaly it.
            const removeCities=['Herat','Kabul','Molah','Rana','Shar','Sharif','Ajlun',"Al Balqa'",'Al Karak']  // You can add manually the cities that you don't wanna dispaly it.
            const response = await axios('https://countriesnow.space/api/v0.1/countries');
            removeCountries.map((city)=>(                                                                       //This code for removing unwanted country from the countries list.
                response.data.data.splice(response.data.data.findIndex((item)=>item.country==city),1)
            ))
            response.data.data.map(location =>{                                                                 //This one for removing unwanted cities form the cities list.
                location.cities = location.cities.filter((city)=>!removeCities.includes(city));
                return location.cities
            });
            setLocations(response.data.data);
        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    // End fetch data from API
    // start handleing input fields 
    const handleName = ($name) => {
        setName($name.target.value);
        name.trim().length > 5 ? setErrorName(true) : setErrorName(false);
        props.name($name.target.value)
    };
    const handleLink = ($link) => {
        setLink($link.target.value);
        $link.target.value.slice(0, 4) === 'www.' && $link.target.value.slice(-4) === '.com' && $link.target.value.length>8 ? setErrorLink(true) : setErrorLink(false)
        props.link($link.target.value)
    };
    const handleImage = ($image) => {
        setImage(($image.target.value));
        $image.target.value.length > 0 ? setErrorImage(true) : setErrorImage(false)
        props.image($image.target.value)
        // start manipulate with image source
        const file = $image.target.files[0]; // this Object holds a reference to the file on disk
        props.image(URL.createObjectURL(file))
        // end manipulate with image source 
    };
    const handleCountry = ($country) => {
        setCountry($country.target.value);
        $country.target.value !== undefined && $country.target.value !== 'Country' ? setErrorCountry(false) : setErrorCountry(true)
        props.country($country.target.value);
        setCities([]);
    };
    const handleCity = ($city) => {
        setCities((prev)=>{
            const citiesSelected = prev.length>0 ? [...prev,$city.target.value] : [$city.target.value]
            return [...new Set(citiesSelected)].filter((city)=>city !== 'City') // to remove duplicate in the ARRAY and remove also City if it was in the array 
        })
        $city.target.value !== undefined && $city.target.value !== 'City' ? setErrorCity(false) : setErrorCity(true)
        props.city($city.target.value)
    };
    
    // start handle the form button
    useEffect(() => {
        const location = errorCountry === false && errorCity === false ? true : false
        errorName && errorLink && errorImage && location ? setBtnIsActive(true) : setBtnIsActive(false)
    }, [name, link, image, country, cities])
    // end handle the form button  
    
    // start handling submitting data
    const handleSubmit = (e) => {
        e.preventDefault();
        const Data = {
            name,
            link,
            image,
            location: {
                country,
                cities: cities
            }
        }
        console.log('Data',Data)
        dispatch(actions.handleData(Data));
        // start reset input values 
        setCountry('');setCities([]); setName(''); setLink(''); setImage('');
        setErrorCountry(null); setErrorCity(null); setErrorName(null); setErrorLink(null); setErrorImage(null); setBtnIsActive(null);
        // end reset input values 
    }
    // end handling submitting data 
    return (
        <div className={classes.formData}>
            <div>
                <h3 className={classes.h3}>Personal Information</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input value={name} type="text" className={`form-control ${errorName === false ? classes.inValid : errorName === true ? classes.valid : null}`} placeholder="Name" maxLength='17' onChange={handleName} />
                    {errorName === false && <p>Required, it must be more than 5 letter and less than 17 letter.</p>}
                </div>
                <div className="form-group">
                    <label>Your Image</label><br />
                    <input value={image} className={`${errorImage === false ? classes.inValid : errorImage === true ? classes.valid : null}`} name="some_name" type="file" accept="image/png, image/jpeg" onChange={handleImage} />
                    {errorImage === false && <p>Required, it must be more (PNG or JPEG) type.</p>}
                </div>
                <div className="form-group">
                    <label>Link</label>
                    <input value={link} type="link" className={`form-control ${errorLink === false ? classes.inValid : errorLink === true ? classes.valid : null}`} placeholder="Link" onChange={handleLink} />
                    {errorLink === false && <p>Required, it must start with (www.), end with (.com), and more than 8 letters/numbers...etc .</p>}
                </div>
                <div className={`row ${classes.location}`}>
                    <label>Location</label>
                    <div className='col-md-6 col-xs-12'>
                        <select value={country} className={`form-select ${errorCountry === true ? classes.inValid : errorCountry === false ? classes.valid : null}`} aria-label="Country" onChange={handleCountry}>
                            <option defaultValue>Country</option>
                            {Locations && Locations.map((location, index) => <option key={index} value={location.country}>{location.country}</option>)}
                        </select>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <select multiple size={country ? 3 : 1} className={`form-select ${errorCity === true ? classes.inValid : errorCity === false ? classes.valid : null}`} disabled={country ? false : true} onChange={handleCity}>
                            <option defaultValue>City</option>
                            {Locations && Locations.map((location) => location.country === country && location.cities.map((city, index) => <option key={index} value={city}>{city}</option>))}
                        </select>
                    </div>
                    {errorCountry || errorCity ? null : <div className='d-flex' style={{flexFlow:'wrap'}}>
                        {cities.length>0 && <p style={{color:'#E66C0D',fontWeight:'bold',margin:'0rem'}}>Cities:&nbsp;</p>} 
                        {cities.length>0 && cities.map((city,index)=>(
                            <span key={index}>{city},&nbsp;</span>
                            ))}
                    </div>}
                    {errorCountry || errorCity ? <p>Required, you have to choose your country and city.</p> : null}
                </div>
                <button type="submit" className="btn btn-primary" disabled={btnIsActive ? false : true}>SEND</button>
            </form>
        </div>
    );
};

export default Form