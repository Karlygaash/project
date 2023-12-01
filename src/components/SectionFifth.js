import React from "react";
import styles from '../assets/css/SectionFifth.module.css'
import Accordion from "./Accordion"

function SectionFifth() {

  return (
    <section className={styles.section_5}>
        <div className={styles.section__container}>
            <h1>FAQ</h1>
            <div className={styles.accordion}>
                <Accordion
                title="What is a non-fungible token (NFT)?"
                text="A non-fungible token is a type of digital token that represents a unique asset. These can either be entirely digital assets or tokenized versions of real-world assets."
                />
                <Accordion
                title="How do I buy an NFT?"
                text="A non-fungible token is a type of digital token that represents a unique asset. These can either be entirely digital assets or tokenized versions of real-world assets."
                />
                <Accordion
                title="What is Crypto® NFT Marketplace?"
                text="A non-fungible token is a type of digital token that represents a unique asset. These can either be entirely digital assets or tokenized versions of real-world assets."
                />
                <Accordion
                title="How do I sell an NFT?"
                text="A non-fungible token is a type of digital token that represents a unique asset. These can either be entirely digital assets or tokenized versions of real-world assets."
                />
            </div>
        </div>
    </section>
  );
}

export default SectionFifth;