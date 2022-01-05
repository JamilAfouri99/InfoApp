import classes from './Home_Body.module.css'
import imgGirl from '../../assets/girl.png'
import imgSitting from '../../assets/sitting.png'
import imgRocket from '../../assets/rocket.png'


const Home_Body = () => {
    return (
        <div className={classes.Home_Body}>
            <div className={classes.firstPart}>
                <div className="container">
                    <div className='row'>
                        <div className={`col-md-4 ${classes.firstPartImage}`}>
                            <img src={imgSitting}></img>
                        </div>
                        <div className={`col-md-8 ${classes.firstPartText}`}>
                            <h2>Title</h2>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, mei iusto timeam praesent at, at molestiae hendrerit vel. Ei pri meliore recusabo, sit epicuri corrumpit forensibus ea, novum causae eu eum. Cum fugit commune quaestio ad, id sed laoreet necessitatibus. Ne nec graeci salutatus voluptaria, est in corpora percipitur, decore malorum consulatu ea sit. Pri philosophia signiferumque ad, in suas definiebas comprehensam qui, quot habeo his ei. No vim autem facilis vivendum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.randomText}>
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <p>Life’s a little lonely, connect with your people <strong>Life’s a little lonely, connect with your people</strong> Life’s a little lonely, connect with your people Life’s a little lonely, connect with your people <strong>Life’s a little lonely, connect with your people </strong>Life’s a little lonely, connect with your people Life’s a little lonely, connect with your people Life’s a little lonely, connect with your people Life’s a little lonely, connect with your people Life’s a little lonely, connect with your people Life’s a little lonely, connect with your people Life’s a little lonely, connect with your people</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.secondPart}>
                <div className="container">
                    <div className={`row align-items-start`}>
                        <div className={`col-md-5 order-1 ${classes.secondPartText}`}>
                            <h3>Lorem Ipsum</h3>
                            <button>Start</button>
                        </div>
                        <div className={`col-md-4 offset-sm-1 order-md-1 ${classes.secondPartImage}`}>
                            <img src={imgGirl}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_Body