import React, { useMemo, useState } from 'react';
import { allElementsExists, cut } from '../utils';

const Table = ({ columns, data }) => {
    const [chipFilters, setChipFilters] = useState([]);
    const [viewedItems, setViewedItems] = useState([]);

    const filteredData = useMemo(() => {
        const tableData = data.map((item) => ({
            ...item,
            viewed: !!viewedItems?.includes(item.id),
        }));
        if (!chipFilters?.length) {
            return tableData;
        }
        return tableData.filter((d) => allElementsExists(chipFilters, d.tags));
    }, [chipFilters, data, viewedItems]);

    const handleRowClick = (rowId) => {
        setViewedItems((rows) => {
            if (rows?.includes(rowId)) {
                return rows;
                //   return rows.filter(id => id !== rowId); // To toggle the view state we use this logic
            }
            return [...rows, rowId];
        });
    };
    return (
        <table
            style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: '#F0F0F0',
            }}
        >
            <thead style={{ border: '1px solid black' }}>
                <tr style={{ width: '100%', border: '1px solid black', height: '88px' }}>
                    {columns.map((column, i) => {
                        if (column?.labelRenderer) {
                            return (
                                <td key={i}>
                                    {column.labelRenderer({
                                        value: column,
                                        setChipFilters,
                                        chipFilters,
                                    })}
                                </td>
                            );
                        }
                        return (
                            <td key={i} align={column.align} style={column.headerCellStyle}>
                                <label>{column.label}</label>
                            </td>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {filteredData?.map((rowData) => {
                    return (
                        <tr key={rowData.id} style={{ height: '114px', cursor: 'pointer' }} onClick={() => handleRowClick(rowData.id)}>
                            {columns.map((column, index) => {
                                const columnValue = rowData[column?.field] || '';

                                if (column?.renderer) {
                                    return (
                                        <td key={index}>
                                            {column.renderer({
                                                value: columnValue,
                                                rowData,
                                                chipFilters,
                                            })}
                                        </td>
                                    );
                                }
                                return (
                                    <td key={index} style={column?.rowCellStyle} title={columnValue}>
                                        {cut(columnValue)}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
