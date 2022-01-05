import classes from './Home_Page';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import Home_Body from '../component/Home_Body/Home_Body';

function Home_Page() {
    return (
        <div className={classes.formPage}>
            <Header />
            <Home_Body />
            <Footer />
        </div>
    );
}

export default Home_Page;
