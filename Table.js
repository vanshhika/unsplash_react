import React, { Component } from 'react'
import './style.css'

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            students: [
                { id: <h1>Features</h1>,
                  sec: <div><h4>Starter</h4>
                       <div id="mydiv">$<a>0</a></div>
                       <p>Per user,per month</p>
                       <button className={"but"}>Go Starter</button></div>,
                  third: <div><h4>Professional</h4>
                       <div id="mydiv">$<a>25</a></div>
                       <p>Per user,per month</p>
                       <button className={"but"}>Go Professional</button></div>,
                four: <div><h4>Oraganization</h4>
                       <div id="mydiv">$<a>50</a></div>
                       <p>Per user,per month</p>
                       <button className={"but"}>Go Oraganization</button></div>
        },
                { id: 'Centralized teams',
                    sec: <input type="checkbox" name="switch" className="check" checked/>,
                    third: <input type="checkbox" name="switch" className="check" checked/>,
                    four: <input type="checkbox" name="switch" className="check" checked/>},
                { id: 'Version history',
                    sec: <input type="checkbox" name="switch" className="check" checked/>,
                    third: <input type="checkbox" name="switch" className="check" checked/>,
                    four: <input type="checkbox" name="switch" className="check" checked/> },
                { id: 'Plugin administration',
                    sec: <input type="checkbox" name="switch" className="check" checked/>,
                    third: <input type="checkbox" name="switch" className="check" checked/>,
                    four: <input type="checkbox" name="switch" className="check" checked/> },
                { id: 'Facebook & Instagram Ads',
                    sec: <input type="checkbox" name="switch" className="check"/>,
                    third: <input type="checkbox" name="switch" className="check" checked/>,
                    four: <input type="checkbox" name="switch" className="check" checked/>},
                { id: 'Design System Analysis',
                    sec: <input type="checkbox" name="switch" className="check"/>,
                    third: <input type="checkbox" name="switch" className="check"/>,
                    four: <input type="checkbox" name="switch" className="check" checked/>},
                { id: 'Unlimited cloud storage',
                    sec: <input type="checkbox" name="switch" className="check"/>,
                    third: <input type="checkbox" name="switch" className="check"/>,
                    four: <input type="checkbox" name="switch" className="check" checked/>}

            ]
        }
    }
    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, sec, third, four } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{sec}</td>
                    <td>{third}</td>
                    <td>{four
                    }</td>
                </tr>
            )
        })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>
                {   key.toUpperCase()
                    //I have not use the header as i have displayed it none in css hence this function is useless
            }</th>
        })
    }

    render() {
        return (
            <div>
                <table id='students'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
                <br />
                <p>I have preselected the checkbox as shown in the given task and the remaining can be selected when needed.</p>
            </div>
        )
    }

}

 export default Table