import React from "react";
import { Card, Image, Box, Text } from "rebass";
import cardImage from "../../assets/images/card-image.jpg"
import { GridData } from "./GridData";

const GridContent = ({ display }) => {
    const data = GridData.dataArray

    if (display === "LAPTOP") {
        return (
            <div
                style={{
                    display: "grid",
                    gridGap: "2vw",
                    gridTemplateColumns: "1fr 1fr 1fr"
                }}
            >
                {
                    data.map((data, index) => {
                        return (
                            <Card
                                key={index}
                                sx={{
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.085)",
                                    borderRadius: "5px",
                                    ":hover": {
                                        cursor: "pointer",
                                    },
                                    width: "100%"
                                }}>
                                <Image src={cardImage} />
                                <Box p={4}>
                                    <Text
                                        fontFamily="Raleway"
                                        fontSize="12px"
                                        color="gray"
                                        sx={{
                                            paddingBottom: "6px"
                                        }}
                                    >
                                        {data.genre}
                                    </Text>
                                    <Text
                                        fontFamily="Merriweather"
                                        fontSize="28px"
                                        sx={{
                                            paddingBottom: "12px"
                                        }}
                                    >
                                        {data.title}
                                    </Text>
                                    <Text>{data.introSentence}</Text>
                                </Box>
                                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}></div>
                                <Box px={4} py={3}>
                                    <Text
                                        fontFamily="Raleway"
                                        fontSize="16px"
                                        color="gray"
                                        paddingBottom="6px"
                                    >
                                        {data.author}
                                    </Text>
                                    <Text
                                        fontFamily="Raleway"
                                        fontSize="12px"
                                        color="gray"
                                    >
                                        {data.date}
                                    </Text>
                                </Box>
                            </Card>
                        )

                    })
                }

            </div >
        )
    }
    if (display === "MOBILE") {
        return (
            <div
                style={{
                    border: '1px solid red',
                    display: "grid",
                    gridGap: "2vw",
                    gridTemplateColumns: "1fr"
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
