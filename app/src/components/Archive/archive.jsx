import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Vault from "./vault";

const Container = styled.div`
    ${tw`
        min-h-screen
        w-full
        p-5
 `};

    font-family: "Chakra Semi Bold";
`;

const archive = () => {
    return (
        <>
            <Container>
                <Vault />
            </Container>
        </>
    );
};

export default archive;
