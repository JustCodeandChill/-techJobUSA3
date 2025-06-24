import React from "react";
import styles from "./Keyword.module.css";

const KeywordSearch = ({ keywords , handleInputChange } : any) => {
    return (
        <section className={styles.jobSearch__section}>
            <label htmlFor="keyword" className={styles.jobSearch__label}>
                <span>Search Keyword:</span>
            </label>
            <input
                type="text"
                name="keyword"
                defaultValue={keywords}
                onChange={handleInputChange}
                className={styles.jobSearch__input}
                placeholder="Tech stack, Ex: React, frontend, etc..."
            />
        </section>
    );
};

export default React.memo(KeywordSearch);
