import Title from '../Title/Title';
import css from './ServicesHomePage.module.css';
import Button from '../Button/Button';
import { VscArrowRight } from "react-icons/vsc";


function ServicesHomePage({services}) {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <Title variant="light" title="Services offered" />
                <ul className={css.list}>
                    {Object.entries(services).map(([category,data]) => (
                                <li key={category} className={css.item}>
                                <h4 className={css.title}>{category}</h4>
                            <p className={css.description}>
                                {data.description}
                            </p>
                            <Button text="Read More" onClick={() => window.open("http://localhost:5173/services/", "_blank")} >
                                <VscArrowRight size={24} color="white" />
                            </Button>
                                </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
};

export default ServicesHomePage;