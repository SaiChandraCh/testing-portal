import React, {Component} from 'react';
import {Table,Jumbotron} from 'react-bootstrap';
import './MyAgents.css';

export default class MyAgents extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state = {
            index:0,
          data: [
            {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
            {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
            {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66}]
            }
          }
          
          selectedRow = (id) =>{
            this.state.data.map((element,index) => {
                if(element.id === id){
                    this.setState({index: index})
                }
            })
            var defaultSelectedRow = <Jumbotron>{this.state.data[this.state.index].id}</Jumbotron>
            return defaultSelectedRow;
          }

           render(){
            const Row = ({id, title, priority}) => (
                <tr onClick={()=>this.selectedRow(id)}>
                    <td></td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{priority}</td>
                </tr>
            );
            const rows = this.state.data.map( (rowData) => <Row {...rowData } />);

            function onSelectRow(row, isSelected, e) {
                if (isSelected) {
                //   alert(`You just selected '${row['name']}'`)
                }
              }
              
            const selectRowProp = {
                mode: 'checkbox',
                clickToSelect: true,
                unselectable: [2],
                selected: [1],
                onSelect: onSelectRow,
                bgColor: 'gold'
              };
               
            return (
                <div>
                <Table responsive className="table table-hover table-striped">
                <thead>
                <tr>
                    <th></th>
                    <th>id</th>
                    <th>title</th>
                    <th>priority</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </Table>
                <this.selectedRow />
                {/* <BootstrapTable data={this.state.data} selectRow={selectRowProp}>
                <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='title'>title</TableHeaderColumn>
                <TableHeaderColumn dataField='task'>task</TableHeaderColumn>
                <TableHeaderColumn dataField='priority'>priority</TableHeaderColumn>
                <TableHeaderColumn dataField='type'>type</TableHeaderColumn>
                <TableHeaderColumn dataField='complete'>complete</TableHeaderColumn>
                </BootstrapTable> */}
                </div>
            );
        }
    }