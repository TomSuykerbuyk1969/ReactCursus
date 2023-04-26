import { GoCloudDownload } from "react-icons/go";

function Table({data, config, keyFn}) {
    const renderedheaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    });
    const renderedRows = data.map((rowData) => {
        const rederedCells = config.map((column) => {
            return <td className='p-2' key={column.label}>{column.render(rowData)}</td>
        });

        return(
            <tr className="border-b" key={keyFn(rowData)}>
                {rederedCells}
            </tr>
        );
    });

    return (
        <table className="table=-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedheaders}
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;