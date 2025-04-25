import styles from '../styles/Home.module.css'
import { useOutletContext } from "react-router-dom";
import HomePageCard from './HomePageCard';
import { Link } from "react-router-dom";

const Home = () => {
    const { shopItems } = useOutletContext();
    // console.log(shopItems[1].icon)
    return (
        <div className={styles.container}>
            <h3>Welcome to the Poke shop! Top quality, non-GMO Pokemon delivered straight to your doorstep.</h3>
            <h4 className={styles.homeH4}>Head to our <Link to="../shop">Shop Page</Link> to choose your pokemon!</h4>
            <div className={styles.imgListContainer}>
                {shopItems && shopItems.map((item) => (
                    <HomePageCard shopItem={item} key={item.pokeIndex}/>
                ))}
            </div>        
        </div>
    )
}

export default Home;