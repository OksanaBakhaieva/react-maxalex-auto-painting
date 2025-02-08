import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import css from './HeroLayout.module.css';

function HeroLayout() {
  return (
    <div className="container">
      <div className="fixed-image">
         <img 
          src="https://static.wixstatic.com/media/11062b_4fbe7ac376ed4d69bac133b3734b5e4d~mv2.jpg/v1/fill/w_1470,h_1508,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4fbe7ac376ed4d69bac133b3734b5e4d~mv2.jpg" 
          alt="Fixed Background" 
        />
      </div>
      <div className="scrollable-content">
            <Hero/>
            <Services/>
        </div>
    </div>
  );
}

export default HeroLayout;
