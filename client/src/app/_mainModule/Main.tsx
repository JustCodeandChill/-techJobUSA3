"use client";
import Image from "next/image";
import styles from "../page.module.css";
import techieLogo from "../../../public/icon.png";
import fyiIcon from "../../../public/information.png";
import expandIcon from "../../../public/downArrow.png";
import {useEffect, useState} from "react";
import KeywordSearch from "@/app/_KeywordSearch/KeywordSearch";
import StateSelect from "@/app/_StateSelect/StateSelect";
import {getStateZipCode, getStateName} from "@/app/constants/state";
import axios from "axios";


export default function Main() {
    const [showFilter, setShowFilter] = useState(true);
    const [keywords, setKeyWords] = useState("");
    const [currentAbbreviationState, setCurrentAbbreviationState] = useState("");
    const collapse = showFilter ? "notCollapse" : "collapse";

    const fetchDataFromServer = () => {
        let resultPerPage = 30;
        let what = null;
        if (currentAbbreviationState === "USA") {
            resultPerPage = 50;
        }
        what = keywords ? keywords : "software engineer";
        return new Promise((resolve, reject) => {
            console.log("return new promise");
            axios
                .get("http://localhost:8080/api/jobs/search", {
                    params: {
                        // where: getStateName(currentAbbreviationState),
                        where: "Ohio",
                        what,
                        resultPerPage,
                        page: 1,
                    },
                })
                .then((data) => {
                    console.log("get data from axios", data);
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    };

    useEffect(() => {
        fetchDataFromServer()
    }, []);


    const handleInputChange = (e) => {
        setKeyWords(e.target.value);
    };

    const handleSelectChange = (value : string) => {
        setCurrentAbbreviationState(value);
    };

    return (
        <div className={styles.main}>
            <main className={styles.container}>
                {/* Sidebar */}
                <section className={styles.sideBar}>
                    <section className={styles.controlBar}>
                        <section className={styles.controlBar__mainIcon}>
                            <Image
                                src={techieLogo}
                                alt="Techie icon"
                                style={{
                                    width: 60,
                                    height: 60,
                                }}
                                className={styles.icon}
                            />
                            <h2>TechieJob</h2>
                        </section>

                        <section className={styles.controlBar__icons}>
                            <section className={styles.tooltip}>
                                <Image
                                    src={fyiIcon}
                                    alt="more detail icon"
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    className={styles.iconFYI}
                                />
                                <span className={styles.tooltiptext}>
                {" "}
                                    {/*<FYI />*/}
              </span>
                            </section>

                            <section>
                                <Image
                                    src={expandIcon}
                                    alt="Expand icon"
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    className={styles.showFilter}
                                    onClick={() => {
                                        setShowFilter((prevValue) => !prevValue);
                                    }}
                                />
                            </section>
                            {/*  */}
                        </section>
                    </section>

                    <section className={`${styles.jobSearch} ${styles[collapse]}`}>
                            <KeywordSearch
                                keywords={keywords}
                                handleInputChange={handleInputChange}
                            />

                            <StateSelect
                                abbreviatedState={currentAbbreviationState}
                                handleSelectChange={handleSelectChange}
                            />

                        {/*    <section className={`${styles.searchButton}`}>*/}
                        {/*        <button*/}
                        {/*            className={`${styles.searchButton__button}`}*/}
                        {/*            onClick={getData}*/}
                        {/*        >*/}
                        {/*            Search*/}
                        {/*        </button>*/}
                        {/*    </section>*/}

                        {/*    {spinner ? <Spinner /> : renderReport()}*/}

                        {/*    <History />*/}
                    </section>
                </section>

                <section className={styles.map}>
                    {/*<Map*/}
                    {/*    jobsData={currentJobsData}*/}
                    {/*    placeToZoom={currentAbbreviationState}*/}
                    {/*/>*/}

                    {/*<img*/}
                    {/*    src={upArrow}*/}
                    {/*    alt="Expand icon"*/}
                    {/*    style={{*/}
                    {/*        width: 30,*/}
                    {/*        height: 30,*/}
                    {/*    }}*/}
                    {/*    onClick={handleFocusClick} className={styles.upArrow}*/}
                    {/*/>*/}
                </section>


            </main>
        </div>
    );
}
