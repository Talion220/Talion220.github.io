function Content4(){
    return(
        <>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content4">
                <h4>Оставить заявку</h4>
                <p>Заполните форму, и мы назначим встречу</p>
                <input className="inputSend" type="text" placeholder="Имя*"/>
                <input className="inputSend" type="text" placeholder="Контакты(почта, телефон, соцсети или др.)*"/>
                <input className="inputSend" type="text" placeholder="Ваша компания(если она у вас есть)"/>
                <textarea className="inputSend" placeholder="Сообщение(по желанию)"></textarea>
                <input className="btn-send" type="submit" value={"Отправить сообщение"} />
            </div>
        </>
    )
}

export default Content4;