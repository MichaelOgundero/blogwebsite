import React from "react";


const GridContent = ({ display }) => {

    if (display === "LAPTOP") {
        return (
            <div
                style={{
                    border: '1px solid red',
                    display: "grid",
                    gridGap: "20px",
                    gridTemplateColumns: "auto auto auto"
                }}
            >

                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
            </div>
        )
    }
    if (display === "MOBILE") {
        return (
            <div
                style={{
                    border: '1px solid red',
                    display: "grid",
                    gridGap: "20px",
                    gridTemplateColumns: "auto"
                }}
            >

                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
                <div style={{ border: "1px solid blue", textAlign: "center" }}>
                    1
                </div>
            </div>
        )
    }
    return (null);
};



export default GridContent;
