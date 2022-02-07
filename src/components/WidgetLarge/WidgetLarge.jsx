import './widgetlarge.css';


function WidgetLarge() {
    const Button = ({ type }) => {
        return <button className={'widgetButton ' + type}  >{type}</button>
    };
    return (
        <div className='widgetLarge'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>


                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://i.pravatar.cc/98" alt="user" className="widgetLgImg" />
                            <span className="widgetLgName">Ale DC</span>
                        </td>
                        <td className="widgetLgDate">4 Feb 2022</td>
                        <td className="widgetLgAmount">u$24.000</td>
                        <td className="widgetLgStatus">
                            <Button type='Approved' />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://i.pravatar.cc/97" alt="user" className="widgetLgImg" />
                            <span className="widgetLgName">Lucas Braca</span>
                        </td>
                        <td className="widgetLgDate">1 Feb 2022</td>
                        <td className="widgetLgAmount">u$32.000</td>
                        <td className="widgetLgStatus">
                            <Button type='Declined' />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://i.pravatar.cc/96" alt="user" className="widgetLgImg" />
                            <span className="widgetLgName">Gonzalo R</span>
                        </td>
                        <td className="widgetLgDate">7 Feb 2022</td>
                        <td className="widgetLgAmount">u$43.000</td>
                        <td className="widgetLgStatus">
                            <Button type='Pending' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export { WidgetLarge };
