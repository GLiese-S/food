
import                        '../CSS/01 Header.css';
import burgerMenu from        './burgerMenu/burgerMenu';

function Header() {

    return (

      <>

        <div className="Header-site-Header">

          <div className="containerForMobile">

            <div className="mobileHeader-site-hamburgerMenu">

              <burgerMenu/>

            </div>

          </div>

          <div className="containerForPC">

            <div className="Header-site-clearBlockLeft"></div>

            <div className="Header-site-clearBlockAgainstBusket"></div>

            <div className="Header-site-lunchOptions"> 
              <a href="">варианты обедов</a> 
            </div>
            
            <div className="Header-site-toOrder">
              <a href="">заказать</a> 
            </div>

            <div className="Header-site-clearBlockCenter"></div>

            <div className="Header-site-team">
              <a href="">команда</a> 
            </div>

            <div className="Header-site-contacts">
              <a href="">контакты</a> 
            </div>

            <div className="Header-site-busket">

              <div className="Header-site-busketIcon"></div>

              <div className="Header-site-busketCounter">
                0      {/* Сделать ссылку на счетчик в YourOrder */}
              </div> 

            </div>

            <div className="Header-site-clearBlockRight"></div>

          </div>
          
        </div>

      </>   

    );

  };

export default Header;