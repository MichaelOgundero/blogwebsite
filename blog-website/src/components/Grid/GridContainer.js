import React, { useState } from "react";
import { Flex, } from "rebass";
import { useMediaQuery } from "react-responsive";
import GridContent from "./GridContent";


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

                        <GridContent display={"LAPTOP"} />
                    )}

                    {isMobile && (
                        <GridContent display={"MOBILE"} />
                    )}
                </div>
            </Flex>
        </div>
    );
};



export default GridContainer;
