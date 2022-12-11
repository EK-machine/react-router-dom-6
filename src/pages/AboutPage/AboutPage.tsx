import React from "react";
import { Link, Outlet } from 'react-router-dom';
import styles from "./styles.module.css";

const AboutPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>About Page</h1>
        <ul>
          <li>
            <Link to="contacts">Contacts</Link>
          </li>
          <li>
            <Link to="team">Team</Link>
          </li>
          <li>
            <Link to="address">Address</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default AboutPage;
