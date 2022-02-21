import instagram from '../assets/instagram.svg';

export const Footer = () => (
    <div className="footer">
      <p>Siga no Instagram</p>
      <a href="https://www.instagram.com/brotherhoodskate/" target="_blank">
        <img src={instagram} className="insta-icon" alt="Instagram" />
      </a>
      <div className="copyright">
          <p> Brotherhood Skateboard - 2022 © Todos os direitos reservados.</p>
      </div>
    </div>
)

export default Footer