import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instraction from "../modules/Instruction";
import Restrictions from "../modules/Restrictions";

import styles from "./HomePage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instraction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default Homepage;
