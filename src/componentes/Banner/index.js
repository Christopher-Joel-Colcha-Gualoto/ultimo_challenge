import style from "./Banner.module.css"
import IconoBanner from "./banner-player.png"

function Banner({img, color}){
    return (
        <div className={style.capa} style={{backgroundImage:` url("/img/banner-${img}.png")`}}>
            <div className={style.gradient} style={{background:`${color}`}}>
            <section className={style.contedio_banner}>
                <div className={style.descripcion}>
                    <div className={style.titulo_banner}>
                        <h1>Front End</h1>
                    </div>
                    <h2>
                        Challenge React
                    </h2>
                    <h3>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en 
                        la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </h3>
                </div>
                <img src={IconoBanner} alt="Qué significa pensar como programador?"/>
            </section>
            </div>
        </div>
    )
}
export default Banner;

