import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const LogbookContainer = styled.div`
    ${tw`
        text-white
        w-full
        p-5
        bg-black
        col-span-5
        rounded-xl
        border-solid
        border-white
        border-4
        overflow-scroll
        flex
        flex-col
    `};

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: #aeff57;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #aeff57;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #aeff57;
    }
    ::-webkit-scrollbar-track {
        background: #000000;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
        background: #666666;
    }
    ::-webkit-scrollbar-track:active {
        background: #333333;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    font-family: "Chakra Semi Bold";
`;

const Table = styled.table`
    ${tw`
        my-5

    `};
`;

const TableRow = styled.tr`
    ${tw`
        
    `};
`;

const TableHeader = styled.th`
    ${tw`
    p-4
    `};
`;

const TableData = styled.td`
    ${tw`
    p-4
    `};
`;

const OutlineButton = styled.button`
    ${tw`
        py-2
        px-4
        mx-1
        rounded-2xl
    `};
    outline: 2px solid #aeff57;
    outline-offset: -2px;
`;

const FullButton = styled.button`
    ${tw`
        py-2
        px-4
        mx-1
        bg-green
        rounded-2xl
        text-black
    `};
`;

const Category = styled.button`
    ${tw`
    `};

    /* color: ${({ active }) => (active ? "#fff" : "#797979")}; */
`;

const Logbook = ({ list, colNames, width = "auto", height = "auto" }) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleClick = () => {
        isActive ? setIsActive(false) : setIsActive(true);
    };

    let fakeData = [
        {
            pool: "SHKOOBY",
            amount: 200,
            availableRewards: 7000,
            timeRemaining: "72 days",
        },
        {
            pool: "SHKOOBY - 30",
            amount: 200,
            availableRewards: 7000,
            timeRemaining: "42 days",
        },
        {
            pool: "SHKOOBY - 60",
            amount: 200,
            availableRewards: 7000,
            timeRemaining: "72 days",
        },
    ];

    return (
        <>
            <LogbookContainer>
                <h1 className="w-full text-xl">Logbook</h1>
                <div className="flex space-x-5">
                    <Category
                        onClick={handleToggleClick}
                        className={isActive ? "text-white" : "text-grey"}
                    >
                        Staked
                    </Category>
                    <Category>Rewards</Category>
                </div>
                <Table>
                    <TableRow>
                        <TableHeader>Action</TableHeader>
                        <TableHeader>Pool</TableHeader>
                        <TableHeader>Amount</TableHeader>
                        <TableHeader>Available Rewards</TableHeader>
                        <TableHeader>Time Remaining</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                    {fakeData.map((data, index) => {
                        return (
                            <TableRow>
                                <TableData>
                                    <OutlineButton>Stake</OutlineButton>
                                </TableData>
                                <TableData>{data.pool}</TableData>
                                <TableData>{data.amount}</TableData>
                                <TableData>{data.availableRewards}</TableData>
                                <TableData>{data.timeRemaining}</TableData>
                                <TableData>
                                    <div className="flex">
                                        <OutlineButton>Withdraw</OutlineButton>
                                        <FullButton>Claim</FullButton>
                                    </div>
                                </TableData>
                            </TableRow>
                        );
                    })}
                </Table>
            </LogbookContainer>
        </>
    );
};

export default Logbook;
