function Contacts(){
    return(
        <div className="contacts">
            <h3>Где нас найти?</h3>
            <section>
                <div className="map" style={{position:'relative', overflow:'none'}}><a href="https://yandex.ru/maps/62/krasnoyarsk/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',    position:'absolute', top:'0px'}}>Красноярск</a><a href="https://yandex.ru/maps/62/krasnoyarsk/?ll=92.776035%2C56.015397&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=92.770150%2C56.016852&whatshere%5Bzoom%5D=16.2&z=16.2" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Улица Забобонова, 16 —     Яндекс Карты</a><iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCUJvJwHkB" width={800} height={500} frameBorder={1} allowFullScreen={true} style={{position:'relative'}}></iframe></div>
                <div className="location">
                    <p>г.Красноярск.</p>
                    <p>ул.Забобонова, д.16, стр. 1</p>
                    <p>2-ой этаж, офис 8к</p>
                    <p>тел. +7 (777) 777-77-77</p>
                    <p>Индивидуальный предприниматель Иванов Иван Иванович</p>
                </div>
            </section>
        </div>
    )
}

export default Contacts;