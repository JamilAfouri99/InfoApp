import classes from './Card.module.css'
import img from '../../../assets/person.jpg'
import {useState,useEffect} from 'react'

const Card =(props)=>{
    const [src,setSrc]=useState(img);

    useEffect(()=>{
        props.image && setSrc(props.image)
    },[props.image])
    return(
        <div className={`d-flex flex-column ${classes.Card}`}>
            <div className={classes.imgContainer}>
                <img src={src} className={classes.img} alt={props.image}/>
            </div>
            <div className={classes.nameContainer}>
                <p>{props.name}</p>
            </div>
            <div className={classes.locationContainer}>
                <p>{`${props.country}`}</p>
            </div>
            <div className={classes.linkContainer}>
                <p><a href={`https://${props.link}`}>{props.link}</a></p>
            </div>
        </div>
    )
}

export default Card