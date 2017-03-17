import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppActions from './redux/AppActions'
import { Container, Select, Input } from 'semantic-ui-react'
import ReactTable from 'react-table'
import logo from './logo.svg'
import 'react-table/react-table.css'
import './App.css'


export class App extends Component {
  componentWillMount() {
    this.props.appActions.loadData()
  }
  render() {

    const handleFilter = (event) => {

    }

    const campaignName = (props) => {
      const statusClass = props.row.status === "ACTIVE" ? "status-active" : "status-paused";
      return <div style={{ display: 'inline', lineHeight: '36px' }}><div className={statusClass}></div><span className="campaign-name" title={props.value}>{props.value}</span></div>
    }

    const customColumn = (props) => {
      const statusClass = props.row.status === "ACTIVE" ? "status-active" : "status-paused";
      return <span style={{ padding: '0px 7px', lineHeight: '36px' }} title={props.value}>{props.value}</span>
    }
    const columns = [{
      header: 'Campaign Name',
      accessor: 'name',
      maxWidth: 200,
      render: campaignName,
    }, {
      header: 'Start Date',
      accessor: 'start_date',
      minWidth: 170,
      render: customColumn,
    },
    {
      header: 'Clicks',
      accessor: 'clicks',
      render: customColumn,
    },
    {
      header: 'Goal',
      accessor: 'cpa_goal',
      render: customColumn,
    }, {
      header: 'CPA',
      accessor: 'cpa_value',
      render: customColumn,
    }, {
      header: 'Spend',
      accessor: 'spend',
      render: customColumn,
    }]


    return (
      <div>
        <span className="title">Campaigns</span>
        <Container style={{ width: '100%', height: '45px', backgroundColor: '#e4eaed', margin: '10px 0px' }}>
          <Select className="bulk-action" placeholder='Bulk Action' />
          <Input className="search-box" icon='search' iconPosition='left' placeholder='Search' />
        </Container>
        <ReactTable
          data={this.props.data}
          columns={columns}
          defaultPageSize={3}
          showPagination={false}
        />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = function (dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
