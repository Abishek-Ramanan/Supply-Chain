import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    const redirect_to_roles = () => {
        history.push('/roles');
    };

    const redirect_to_addmed = () => {
        history.push('/addmed');
    };

    const redirect_to_supply = () => {
        history.push('/supply');
    };

    const redirect_to_track = () => {
        history.push('/track');
    };

    return (
        <div className="container text-center d-flex flex-column justify-content-center align-items-center bg-dark text-white" style={{ minHeight: "100vh" }}>
            <h3 className="bg-primary text-white px-4 py-2 rounded">Pharmacies Supply Chain Flow :- </h3>
            <br />
            <h5>Owner Should Register Raw material suppliers ,Manufacturers, Distributors and Retailers</h5>
            <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
            <br />
            <h5>Owner should order medicines</h5>
            <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">Order Medicines</button>
            <br />
            <h5> Control Panel</h5>
            <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
            <br />
            <hr />
            <br />
            <h5><b>Track</b> the medicines:</h5>
            <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Medicines</button>
        </div>
    );
}

export default Home;
