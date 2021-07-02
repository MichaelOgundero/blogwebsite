import React, { useState } from "react";
import { Flex, } from "rebass";
import { useMediaQuery } from "react-responsive";


const GridContainer = () => {
    const [paddingHeader, setPaddingHeader] = useState(6);


    const handlePaddingHeader = (matches) => {
        if (matches) {
            setPaddingHeader(6);
        } else {
            setPaddingHeader(4);
        }
    };

    const isMobile = useMediaQuery({ maxDeviceWidth: 768 });
    const isLaptop = useMediaQuery(
        { minDeviceWidth: 769 },
        undefined,
        handlePaddingHeader
    );




    return (
        <div>
            <Flex

                px={paddingHeader}
                py={4}

                alignItems="flex-start"

            >
                <div
                    style={{
                        width: "100%",
                    }}
                >


                    {isLaptop && (
                        <div
                            style={{
                                border: '1px solid red',

                            }}
                        >
                            laptop

                        </div>
                    )}

                    {isMobile && (
                        <div
                            style={{
                                border: '1px solid red',
                            }}
                        >
                            mobile
                        </div>
                    )}
                </div>
            </Flex>
        </div>
    );
};



export default GridContainer;
