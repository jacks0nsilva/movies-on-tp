import React from 'react';
import { MoviesPopular, TvPopular } from '../interface/interface';

export const usePagination = (
    ipp: number,
    movies: TvPopular[] | MoviesPopular[]
) => {
    const [itemPerPage] = React.useState(ipp);
    const [currentPage, setCurrentPage] = React.useState(0);

    const pages = Math.ceil(movies.length / itemPerPage);
    const startIndex = currentPage * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentItems = movies.slice(startIndex, endIndex);
    const numberPage = Array.from(Array(pages));

    function pageSelector() {
        return (
            <div className="btnPageSelector">
                {currentPage <= 0 ? (
                    <button disabled>Previous</button>
                ) : (
                    <button onClick={() => setCurrentPage((page) => page - 1)}>
                        Previous
                    </button>
                )}

                {numberPage.map((_item, index) => {
                    return (
                        <button
                            style={
                                index === currentPage
                                    ? { background: '#131313' }
                                    : { background: 'initial' }
                            }
                            key={index}
                            value={index}
                            onClick={(
                                e: React.MouseEvent<
                                    HTMLButtonElement,
                                    MouseEvent
                                >
                            ) => setCurrentPage(Number(e.currentTarget.value))}
                        >
                            {index + 1}
                        </button>
                    );
                })}

                {currentPage === numberPage.length - 1 ? (
                    <button disabled>Next</button>
                ) : (
                    <button onClick={() => setCurrentPage((page) => page + 1)}>
                        Next
                    </button>
                )}
            </div>
        );
    }

    return {
        pageSelector,
        currentItems,
    };
};
