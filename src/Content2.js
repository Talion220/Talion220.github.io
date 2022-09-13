import img1 from "./img/1.png";
import img130 from "./img/1-30.png";
import img2 from "./img/2.png";
import img230 from "./img/2-30.png";
import img3 from "./img/3.png";
import img330 from "./img/3-30.png";
import img4 from "./img/4.png";
import img430 from "./img/4-30.png";
import img5 from "./img/5.png";
import img530 from "./img/5-30.png";
import img6 from "./img/6.png";
import img630 from "./img/6-30.png";

function Content2(){
    return(
        <div className="content2">
            <h2>Наши услуги по веб-разработке</h2>
            <p>Вот список всех услуг, которые мы можем вам предоставить</p>
            <div className="content2--container">
                <div className="content2--card">
                    <span>
                        <img src={img1} alt="" />
                        <img src={img130} alt="" />
                    </span>
                    <div className="cont">
                        <span><h3>Веб-дизайн</h3></span>
                        <p> UX / UI дизайн, услуги по разработке веб-сайтов, редизайн, прототипы и каркасы. Мы можем сделать все это. Наши веб-дизайнеры могут начать работать с созданием CJM и перейти к созданию систем проектирования.</p>
                    </div>
                </div>
                <div className="content2--card">
                    <span>
                        <img src={img2} alt="" />
                        <img src={img230} alt="" />
                    </span>
                    <div className="cont">
                        <span><h3>Разработка интерфейса</h3></span>
                        <p>Наши веб-разработчики знают и работают с надежными фреймворками и пишут высокопроизводительный код на ReactJS и NodeJS. Наша команда может построить правильную  архитектуру вокруг вашего существующего API.</p>
                    </div>
                </div>
                <div className="content2--card">
                    <span>
                        <img src={img6} alt="" />
                        <img src={img630} alt="" />
                    </span>
                    <div className="cont">
                        <span><h3>Разработка серверной части</h3></span>
                        <p>Мы можем удовлетворить ваши конкретные требования. Наша команда работает с высоконагруженными системами и обеспечивает разработку различных функций для достижения наилучших результатов.</p>
                    </div>
                </div>
                <div className="content2--card">
                    <span>
                        <img src={img4} alt="" />
                        <img src={img430} alt="" />
                    </span>
                    <div className="cont">
                        <span><h3>Мобильная разработка</h3></span>
                        <p>Мы используем один из самых мощных мультиплатформенных фреймворков Flutter для одновременного создания красивых и быстрых мобильных приложений для iOS и Android и ускорения разработки.</p>
                    </div>
                </div>
                <div className="content2--card">
                    <span>
                        <img src={img5} alt="" />
                        <img src={img530} alt="" />
                    </span>
                    <div className="cont">
                        <span><h3>Гарантия качества</h3></span> 
                        <p>Мы позаботимся о том, чтобы вы получили то, что ожидаете, когда мы закончим проект. С помощью ручного тестирования и автотестирования все работает гладко, безупречно и без ошибок.</p>
                    </div>
                </div>
                <div className="content2--card">
                    <span>
                        <img src={img3} alt="" />
                        <img src={img330} alt="" />
                    </span>
                    <div className="cont">
                        <span><h3>Постоянная поддержка</h3></span>
                        <p>Наша команда обеспечивает поддержку проектов наших клиентов до тех пор, пока они в этом нуждаются. Мы также работаем с рефакторингом и внедряем новые функции по запросу.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content2;
