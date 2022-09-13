function Form(){
    window.onload=function(){
        
        let Link = document.querySelectorAll(".link");
        let btnMenuOpen = document.querySelector(".open");
        let btnMenuClose = document.querySelector(".close");
        if(btnMenuOpen){
            btnMenuOpen.addEventListener("click", HideMenuOpen);
        }
        if(btnMenuClose){
            btnMenuClose.addEventListener("click", HideMenuClose);
            for (let i=0; i<Link.length; i++){
                Link[i].addEventListener("click", HideMenuClose);
            }       
        }

        let btnHeader=document.querySelector(".btn-form");
        let btnPage=document.querySelector(".btn-page");
        let formBg=document.querySelector(".form-bg");
        let btnSend= document.querySelectorAll(".btn-send");
        // let PageBtnSend=document.querySelector("#btn-send");
        for (let i=0; i<btnSend.length; i++){
            btnSend[i].addEventListener("click",DataSend);
        }   
        
        // PageBtnSend.addEventListener("click",PageDataSend);
        btnHeader.addEventListener("click",formOpen);
        if (btnPage){
            btnPage.addEventListener("click",formOpen);
            
        }
        formBg.addEventListener("click",formClose);
    }

    function HideMenuOpen(){
        let open = document.querySelector(".hide-menu");
        open.style.display="block";
        let imgOpen=document.querySelector(".open");
        imgOpen.style.display="none";
        let imgClose=document.querySelector(".close");
        imgClose.style.display="block";
    }
    function HideMenuClose(){
        let close = document.querySelector(".hide-menu");
        close.style.display="none";
        let imgOpen=document.querySelector(".open");
        imgOpen.style.display="block";
        let imgClose=document.querySelector(".close");
        imgClose.style.display="none";
    }
    function formOpen(){
        let show=document.querySelector(".form-bg");
        show.style.display="flex";
        document.body.style.overflowY="hidden";
    }
    function formClose(event){
        let hide=document.querySelector(".form-bg");
        if (event.target.className==="form-bg"){
            hide.style.display="none";
            document.body.style.overflowY="scroll";
        }
    }
    function DataSend(){
        let hide=document.querySelector(".form-bg");
        let InputSend = document.querySelectorAll(".inputSend");
        for (let i=0; i<InputSend.length; i++){
            InputSend[i].value="";
        }   
        hide.style.display="none";
        document.body.style.overflowY="scroll";
        console.log(1);
    }
    // function PageDataSend(){
    //     let PageInputSend = document.querySelectorAll(".pageInputSend");
    //     for (let i=0; i<PageInputSend.length; i++){
    //         PageInputSend[i].value="";
    //     }   
    // }
    return(
        <div className="form-bg">
            <div className="form">
                <h4>Давайте поговорим!</h4>
                <p>Заполните форму, и мы назначим встречу</p>
                <input className="inputSend" type="text" placeholder="Имя*"/>
                <input className="inputSend" type="text" placeholder="Контакты(почта, телефон, соцсети или др.)*"/>
                <input className="inputSend" type="text" placeholder="Ваша компания(если она у вас есть)"/>
                <textarea className="inputSend" placeholder="Сообщение(по желанию)"></textarea>
                <input className="btn-send" type="submit" value={"Отправить сообщение"} />
            </div>
        </div>
    )
}

export default Form;