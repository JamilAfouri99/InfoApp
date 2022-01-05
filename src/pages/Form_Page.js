import classes from './Form_Page';
import Contact_Us_Form from '../component/Contact_Us_Form/Contact_Us_Form';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

function Form_Page() {
    const data = useSelector(state=>state.data)
    useEffect(()=>{
        localStorage.setItem('Personl Information',JSON.stringify(data));
    },[data]);
    return (
        <div className={classes.formPage}>
            <Header />
            <Contact_Us_Form />
            <Footer />
        </div>
    );
}

export default Form_Page;
