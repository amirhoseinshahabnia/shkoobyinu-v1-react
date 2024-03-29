import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Vault from "components/archive/vault";
import LockedRewards from "components/archive/lockedRewards";

const Container = styled.div`
    ${tw`
        min-h-screen
        w-full
        p-5
        space-y-5
 `};

    font-family: "Chakra Semi Bold";
`;

const archive = () => {
    return (
        <>
            <Container>
                <Vault />
                <LockedRewards />
            </Container>
        </>
    );
};

export default archive;
