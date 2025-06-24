import React, { useState, useEffect, useRef } from "react";
import { USA_STATE } from "../constants/state";
import styles from "./StateSelect.module.css";
import {STATE} from "../constants/state";

const StateSelect = ({ abbreviatedState, handleSelectChange }) => {
    const [filterWord, setFilterWord] = useState(abbreviatedState);
    const [resultLists, setResultLists] = useState(USA_STATE);
    const [inputFocus, setInputFocus] = useState(false);
    const clicked = useRef(false);

    const onInputChange = (e) => {
        setFilterWord(e.target.value);
    };

    const onResultFilter = () => {
        const searchedWord = filterWord.toLowerCase();
        const wordLength = searchedWord.length;
        let statesFound: STATE[] = [];

        if (!clicked.current && !inputFocus) {
            clicked.current = true;
            setResultLists([]);
            return;
        }

        if (filterWord) {
            USA_STATE.forEach((state) => {
                const stateName = state.name.toLowerCase();
                for (let i = 0; i < wordLength; i++) {
                    if (
                        searchedWord.substr(0, wordLength) ===
                        stateName.substr(0, wordLength)
                    ) {
                        statesFound.push(state);
                        break;
                    }
                }
            });
        } else if (!filterWord) {
            statesFound = USA_STATE;
        }

        // either 3: full, empty, matched
        setResultLists([...statesFound]);
        setInputFocus(false);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    const onInputClick = (name: string | null, abbreviation: string | null) => {
        setFilterWord(name);
        clicked.current = false;
        setInputFocus(false);
        setResultLists([]);
        handleSelectChange(abbreviation);
    };

    const onInputFocus = (e: any) => {
        setInputFocus(true);
    };

    const onInputBlur = (e : any) => {
        setInputFocus(false);
        if (e.currentTarget) {
            clicked.current = true;
        }
    };

    useEffect(() => {
        onResultFilter();
    }, [filterWord]);

    useEffect(() => {
        if (inputFocus) {
            setResultLists([...USA_STATE]);
        } else if (!inputFocus && clicked.current) {
            clicked.current = false;
            return;
        } else if (!inputFocus) {
            setResultLists([]);
        }
    }, [inputFocus]);

    return (
        <section className={styles.jobSearch__section}>
            <label htmlFor="keyword" className={styles.jobSearch__label}>
                <span>Search Location:</span>
            </label>

            <form className={styles.form} onSubmit={onFormSubmit}>
                <input
                    className={styles.chosenValue}
                    type="text"
                    placeholder="Type to filter and select"
                    onChange={onInputChange}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    value={filterWord}
                    tabIndex={2}
                />
                <ul className={styles.valueList} tabIndex={0}>
                    {resultLists.map(({ name, abbreviation }, index) => {
                        return (
                            <li
                                tabIndex={-1}
                                key={name}
                                value={abbreviation}
                                className={styles.jobSearch__selectOption}
                                onClick={(e) => {
                                    onInputClick(name, abbreviation);
                                }}
                            >
                                {name}
                            </li>
                        );
                    })}
                </ul>
            </form>
        </section>
    );
};

export default React.memo(StateSelect);
