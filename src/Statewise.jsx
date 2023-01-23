import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Statewise = () => {

    const [data, updateData] = useState([]);

    const retrieveData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const getData = await res.json();
        updateData(getData.statewise);
    }

    useEffect(() => {
        retrieveData();
    }, []);

    return (
        <>
            <div className="container mt-1">
                <div className="main-heading" style = {{background: '#dcdcdc'}}>
                    <h1 className="pt-3 pb-3 text-center align-middle">COVID-19 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currData, ind) => {
                                    if(currData.state == "State Unassigned"){
                                        return ' ';
                                    }
                                    return(
                                        <tr>
                                            <td> {currData.state} </td>
                                            <td> {currData.confirmed} </td>
                                            <td> {currData.recovered} </td>
                                            <td> {currData.deaths} </td>
                                            <td> {currData.active} </td>
                                            <td> {currData.lastupdatedtime} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <hr className="mt-5"/>
                <Footer/>
            </div>
        </>
    );
}


export default Statewise;