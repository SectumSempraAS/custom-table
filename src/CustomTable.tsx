import React, { FC } from "react"

import './CustomTable.css'

interface general<T> {
    [xNumber: number] : T
}

interface ColumnProperties {
    width?: string
    textColor?: string
    backgroundColor?: string
    alignment?: 'center' | 'left' | 'right'
}

interface RowProperties {
    heigth?: string
    borderBottom?: string
} 

export interface Column {
    [columnNumber : number] : ColumnProperties
}

export interface Row {
    [rowNumber: number]: RowProperties
}

interface TableProps {
    data: any[][],
    columnConfig?: Column
    rowConfig?: Row
}

interface RowProps {
    rowData : any[]
    rowNumber: number
    columnConfig?: Column
    rowStyle?: Object
}

const getColumnProperties = (columnConfig: Column, numberOfColumn: number) => {
    const result: ColumnProperties[] = [];
    for(let i = 0 ; i < numberOfColumn ; i++) {
        result.push({})
    }
    Object.keys(columnConfig).forEach((keyValue) => {
        result[keyValue] = columnConfig[keyValue]; 
    })
    return result
} 

const getRowProperties = (rowConfig: Row, numberOfRows: number) => {
    const result: RowProperties[] = [];
    for(let i = 0 ; i < numberOfRows ; i++) {
        result.push({})
    }
    Object.keys(rowConfig).forEach((keyValue) => {
        result[keyValue] = rowConfig[keyValue]; 
    })
    return result
}

const CustomRow:FC<RowProps> = ({rowData, columnConfig = {}, rowStyle}) => {
    const columnPropertiesArray: ColumnProperties[] = getColumnProperties(columnConfig, rowData.length) 
    console.log(rowStyle) 
    return (
        <tr style={rowStyle}>
            {rowData.map((cellData, index) => {
                const textColor = columnPropertiesArray[index].textColor ?? 'black'
                const width = columnPropertiesArray[index].width ?? 'auto'
                const backgroundColor = columnPropertiesArray[index].backgroundColor ?? ''
                const alignment = columnPropertiesArray[index].alignment ?? 'center'
                const myStyle = {
                    color: textColor,
                    width: width,
                    backgroundColor: backgroundColor,
                    'text-align': alignment
                }
                return (
                    <td key={`cell_${rowData}_${index}`} style={myStyle}>{cellData}</td>
                )
            })}
        </tr>
    )
}

const CustomTable:FC<TableProps> = ({data, columnConfig = {}, rowConfig = {} }) => {
    console.log(columnConfig)
    const rowPropertiesArray = getRowProperties(rowConfig, data.length)
    return (
        <div className="custom-table-container">
            <table>
                <tbody>
                {data.map((rowData, index) => {
                    const myStyle = {
                        'border-bottom': rowPropertiesArray[index].borderBottom ?? '',
                        height: rowPropertiesArray[index].heigth ?? 'auto'
                    }
                    return <CustomRow key={`row_${index}`} rowData={rowData} columnConfig={columnConfig} rowNumber={index} rowStyle={myStyle}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomTable