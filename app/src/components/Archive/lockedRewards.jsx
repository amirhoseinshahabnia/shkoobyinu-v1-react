import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ReactPaginate from "react-paginate";

import { lockedRewardsDummyDataObj } from "components/helpers/dummyData";

const LockedRewardsCard = styled.div`
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
    text-lg
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

const LockedRewards = () => {
    const [tables, setTables] = useState(
        lockedRewardsDummyDataObj.slice(0, 50)
    );
    const [pageNumber, setPageNumber] = useState(0);

    const tablesPerPage = 5;
    const pagesVisited = pageNumber * tablesPerPage;

    const pageCount = Math.ceil(
        lockedRewardsDummyDataObj.length / tablesPerPage
    );
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayTables = lockedRewardsDummyDataObj
        .slice(pagesVisited, pagesVisited + tablesPerPage)
        .map((table) => {
            return (
                <TableRow>
                    <TableData>{table.time}</TableData>
                    <TableData>
                        <div>
                            <img src={table.currency.imgpath} alt="" />
                            <h1>{table.currency.name}</h1>
                            <h1>{table.currency.amount}</h1>
                        </div>
                    </TableData>
                    <TableData>{table.timeRemaining}</TableData>
                </TableRow>
            );
        });

    return (
        <>
            <LockedRewardsCard>
                <h1 className="text-xl">Locked Rewards</h1>
                <Table>
                    <TableRow>
                        <TableHeader>Claimed</TableHeader>
                        <TableHeader></TableHeader>
                        <TableHeader>Time Remaining</TableHeader>
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
            </LockedRewardsCard>
        </>
    );
};

export default LockedRewards;
