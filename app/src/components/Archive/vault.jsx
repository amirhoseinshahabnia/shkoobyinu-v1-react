import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ReactPaginate from "react-paginate";

import "./vault.css";

import { vaultDummyDataObjOne } from "../helpers/dummyData";

const VaultCard = styled.div`
    ${tw`
        text-white
        p-5
        rounded-xl
        border
        border-solid
        border-4
        w-full
        space-y-6
        overflow-scroll
    `};
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        z-index: -1;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: #00c2d4;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #00c2d4;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #00c2d4;
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
`;

const Table = styled.table`
    ${tw`
        w-full
        relative
        mb-5
    `};
`;

const TableRow = styled.tr`
    ${tw`
        
    `};
`;

const TableHeader = styled.th`
    ${tw`
    py-2
    px-4
    `};
`;

const TableData = styled.td`
    ${tw`
    px-6
    py-4
    text-white
    border-t-2
    border-b-2
    `};
`;

const CurrencyIcon = styled.img`
    ${tw`
    
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

const Vault = () => {
    const [tables, setTables] = useState(vaultDummyDataObjOne.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const tablesPerPage = 8;
    const pagesVisited = pageNumber * tablesPerPage;

    const pageCount = Math.ceil(vaultDummyDataObjOne.length / tablesPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayTables = vaultDummyDataObjOne
        .slice(pagesVisited, pagesVisited + tablesPerPage)
        .map((table) => {
            return (
                <TableRow>
                    <TableData>{table.corePool}</TableData>
                    <TableData>{table.lockedflexi}</TableData>
                    <TableData>{table.tenure}</TableData>
                    <TableData>
                        <div>
                            <CurrencyIcon src={"/"} />
                            <h1>{table.stakedAmount.currency}</h1>
                            <h1>{table.stakedAmount.amount}</h1>
                        </div>
                    </TableData>
                    <TableData>{table.unlockDate}</TableData>
                    <TableData>
                        <CurrencyIcon src={"/"} />
                        <h1>{table.readyRewards.currency}</h1>
                        <h1>{table.readyRewards.amount}</h1>
                    </TableData>
                    <TableData>
                        <FullButton className="my-1">Stake</FullButton>
                        <OutlineButton className="my-1">Claim</OutlineButton>
                    </TableData>
                </TableRow>
            );
        });

    return (
        <>
            <VaultCard>
                <h1 className="text-xl">My Vault</h1>
                <Table>
                    <TableRow>
                        <TableHeader>Core Pools</TableHeader>
                        <TableHeader>Locked / Flexi</TableHeader>
                        <TableHeader>Tenure</TableHeader>
                        <TableHeader>Staked Amount</TableHeader>
                        <TableHeader>Unlock Date</TableHeader>
                        <TableHeader>Ready Rewards</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                    {displayTables}
                </Table>
                <div className="relative flex justify-start items-center overflow-hidden">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtns"}
                        previousLinkClassName={"previousBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </VaultCard>
        </>
    );
};

export default Vault;
