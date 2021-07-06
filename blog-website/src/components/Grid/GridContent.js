import React, { useState, useEffect } from "react";
import { Card, Image, Box, Text } from "rebass";
import cardImage from "../../assets/images/card-image.jpg"
import cardImage2 from "../../assets/images/card-image2.jpg"
import cardImage3 from "../../assets/images/card-image3.jpg"
import { GridData } from "./GridData";
import ForwardArrow from "../../assets/icons/forward-arrow.svg";


const GridContent = ({ display }) => {
    const data = GridData.dataArray
    const [arrowIcon, setArrowIcon] = useState(false)


    const handleTracker = (index) => {
        setArrowIcon(true)
        data[index].tracker = true

        console.log(data)

    }

    const handleTrackerLeave = (index) => {
        setArrowIcon(false)
        data[index].tracker = false
    }



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
                            <div key={index} onMouseEnter={() => { handleTracker(index) }} onMouseLeave={() => { handleTrackerLeave(index) }}>
                                <Card

                                    key={index}
                                    sx={{
                                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.085)",
                                        borderRadius: "5px",
                                        ":hover": {
                                            cursor: "pointer",
                                            color: "rgba(93, 63, 211,1)"
                                        },
                                        width: "100%",
                                        height: "600px",
                                        position: "relative",
                                        zIndex: 1
                                    }}>
                                    {
                                        data.tracker ? (
                                            <Image src={ForwardArrow} sx={{
                                                display: "block",
                                                position: "absolute",
                                                top: "20px",
                                                right: "20px",
                                                width: "25px",
                                                height: "25px",
                                            }} />
                                        ) : (
                                            <></>
                                        )
                                    }
                                    {
                                        data.tracker ? (
                                            <Image opacity="0.5" alt={"Image " + JSON.stringify(parseInt(index) + 1)} src={data.image} height="250px" display="block" marginLeft="auto" marginRight="auto" width="100%" />
                                        ) : (
                                            <Image alt={"Image " + JSON.stringify(parseInt(index) + 1)} src={data.image} height="250px" display="block" marginLeft="auto" marginRight="auto" width="100%" />
                                        )
                                    }
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
                                        <Text
                                            fontFamily="Raleway"
                                            fontSize="18px"
                                            paddingBottom="6px"
                                            fontWeight="300"
                                            color="black"
                                        >
                                            {data.introSentence}
                                        </Text>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: "0px",
                                            width: "100%"
                                        }}
                                    >
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
                                    </Box>
                                </Card>
                            </div>
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
