import styles from '../styles/Home.module.css'
import { useOutletContext } from "react-router-dom";
import HomePageCard from './HomePageCard';

const Home = () => {
    const { shopItems } = useOutletContext();
    // console.log(shopItems[1].icon)
    return (
        <div className={styles.container}>
            <h3>Welcome to the Poke shop! Top quality, non-GMO Pokemon delivered straight to your doorstep.</h3>

            <div className={styles.imgListContainer}>
                {shopItems && shopItems.map((item) => (
                    <HomePageCard shopItem={item} key={item.pokeIndex}/>
                ))}
            </div>        
        </div>
    )
}

export default Home;

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// icon: shopItemsData.sprites.front_default, pokeIndex: tempIndex

//gif: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/28
//gif: shopItemsData.sprites.versions.generation-v.black-white.animated.front_shiny