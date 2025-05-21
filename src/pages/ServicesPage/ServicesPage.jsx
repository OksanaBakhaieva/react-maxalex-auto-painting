import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Services from '../../components/Services/Services';
import FAQ from '../../components/FAQ/FAQ';
import css from './ServicesPage.module.css';


function ServicesPage() {
    const location = useLocation();
    
    useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    return (
        <div className={css.container}>
            <Services />
            <FAQ/>
        </div>
    )
};

export default ServicesPage;

