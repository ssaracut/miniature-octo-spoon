import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppActions from './redux/AppActions'
import ReactTable from 'react-table';
import logo from './logo.svg';
import 'react-table/react-table.css'
import './App.css';


export class App extends Component {
  componentWillMount() {
    this.props.appActions.loadData()
  }
  render() {

    const handleFilter = (event) => {

    }

    const campaignName = (props) => {
      const statusClass = props.row.status === "ACTIVE" ? "status-active" : "status-paused";
      return (
        <div>
          <div className={statusClass}><span className="campaign-name" title={props.value}>{props.value}</span></div>
        </div >
      )
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
    },
    {
      header: 'Clicks',
      accessor: 'clicks',
    },
    {
      header: 'Goal',
      accessor: 'cost_per_acquisition.goal',
    }, {
      header: 'CPA',
      accessor: 'cost_per_acquisition.value',
    }, {
      header: 'Spend',
      accessor: 'spend',
    }]


    return (
      <div>
        <h1>Campaigns</h1>
        <label>
          Search:
          <input type="text" name="search" onChange={handleFilter} />
        </label>
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
