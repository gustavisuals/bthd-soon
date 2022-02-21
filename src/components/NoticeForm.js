export const NoticeForm = () => (
    <div className="notice-form">
      <form className="notice-form-comp" id="form" name="form" method="post" action="#s">
  
        <input type="text" name="nome" id="nome" placeholder="Nome completo"/>
        <br></br>
  
        <input type="email" name="email" id="email" placeholder="E-mail"/>
        <br></br>
  
        <input type="tel" name="contato" id="contato" placeholder="Contato (celular, wpp)"/>
        <br></br>

        <input type="submit" value="ENVIAR"/>
        
      </form>

      <div>
        <p className="sub-title"> Enquanto isso, teste seus olies</p>
      </div>

    </div>
    
)

export default NoticeForm