import Table from "../components/Table";

function tablePage() {
    const data = [
        { name: 'Orange',color: 'bg-orange-500', score: 5 },
        { name: 'Apple',color: 'bg-red-500', score: 3 },
        { name: 'Banana',color: 'bg-yellow-500', score: 1 },
        { name: 'Lime',color: 'bg-green-500', score: 4 },
    ];

    const config = [
        { 
            label: 'Name',
            render: (rowData) => rowData.name
        },
        { 
            label: 'Color',
            render: (rowData) => <div className={`p-3 m-2 ${rowData.color}`}></div>
        },
        { 
            label: 'Score',
            render: (rowData) => rowData.score
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default tablePage;