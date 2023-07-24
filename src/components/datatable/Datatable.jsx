

function Datatable({ row, colum }) {

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            colum.map((item, index) => (
                                <th key={index}>{item['HeaderName']}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        row.length > 0 ? (row.map((rdata, indexs) => {
                            return <tr className="tr">
                                {
                                    colum.map((rcolum, ins) => {
                                        return <td>{rdata[rcolum['field']] ? rdata[rcolum['field']] : "-"}</td>
                                    })
                                }
                            </tr>
                        })) : ("No Data Found")
                    }
                </tbody>
            </table>
            <div >
                <div className="d-flex justify-space-between tfooter" >
                    <div className="pagesize">
                        SHOWING 1 - 4 OF {row.length}
                    </div>
                    <div >
                        <button className="table-page-btn">1 </button>
                        <button className="n-btn">2 </button>
                        <button className="n-btn" >3 </button>
                        <button className="n-btn" >4 </button>
                        <button className="n-btn" >{">"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datatable