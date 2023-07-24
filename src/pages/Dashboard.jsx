import Card from "../components/cards/Card"
import "./dashboard.css"
import Datatable from "../components/datatable/Datatable"

const Menu = [
    {
        "Name": "Total Plan",
        "Child": [
            {
                "Name": "Total Customers",
                "Value": "12,34,500"
            },
            {
                "Name": "Total Amount",
                "Value": "12,34,005"
            }
        ]

    },
    {
        "Name": "New Plan",
        "Child": [
            {
                "Name": "No. Of Customers",
                "Value": "12,34,500"
            },
            {
                "Name": "Total Amount",
                "Value": "12,34,005"
            }
        ]
    },
    {
        "Name": "Existing Plan",
        "Child": [
            {
                "Name": "No. Of Customers",
                "Value": "12,34,500"
            },
            {
                "Name": "Total Amount",
                "Value": "12,34,005"
            }
        ]
    },
    {
        "Name": "Gold Rate History",
        "Child": [
            {
                "Name": "Current Gold Rate",
                "Value": "12,34,500"
            }
        ]
    }
]

function Dashboard() {
    var row = [
        {
            "name": "Rajesh",
            "planid": "2F34",
            "month": "3",
            "goldrate": "12,34",

            "amount": "12,34,000",
            "accumgold": "12,340",
            "action": <button className="cbtn-table">Raise Invoice</button>

        },
        {
            "name": "Rajesh",
            "planid": "2F34",
            "month": "3",
            "goldrate": "12,34",

            "amount": "12,34,000",
            "accumgold": "12,340",
            "action": <button className="cbtn-table">Raise Invoice</button>

        },
        {
            "name": "Rajesh",
            "planid": "2F34",
            "month": "3",
            "goldrate": "12,34",

            "amount": "12,34,000",
            "accumgold": "12,340",
            "action": <button className="cbtn-table">Raise Invoice</button>

        },
        {
            "name": "Rajesh",
            "planid": "2F34",
            "month": "3",
            "goldrate": "12,34",

            "amount": "12,34,000",
            "accumgold": "12,340",
            "action": <button className="cbtn-table">Raise Invoice</button>

        },
    ]

    var colum = [
        {
            field: "name",
            HeaderName: "Customer Name"
        },
        {
            field: "planid",
            HeaderName: "Plan Id"
        },
        {
            field: "month",
            HeaderName: "Month"
        },
        {
            field: "goldrate",
            HeaderName: "C.Gold Rate"
        },
        {
            field: "amount",
            HeaderName: "Total Amount"
        },
        {
            field: "accumgold",
            HeaderName: "Accumulated Gold"
        },
        {
            field: "action",
            HeaderName: ""
        }
    ]


    return (
        <div className="Dashboard">
            <div className="breadscrum">
                <div className="d-flex breadscrum-top">
                    <div style={{ fontSize: 32 }}>
                        New Installments
                    </div>
                    <div className="cgr d-flex justify-center">
                        <div className="c-margin-top-bottom">
                            CGR: Rs. 12,340/Gram | <span style={{ color: "#FC762A" }}>Edit</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="dash-cards d-flex">
                {
                    Menu.map((item, index) => {
                        return <Card item={item} index={index} />
                    })
                }
            </div>
            <div className="dash-table">
                <Datatable row={row} colum={colum} />
            </div>
        </div>
    )
}

export default Dashboard