import QR from '../assets/logo/download.png'
import DataTable from 'react-data-table-component'
import { useState,useEffect } from 'react';
import React from 'react';

const Friends = () => {


  const columns = [
    {
      name: 'Name',
      selector: row =>row.name,
      center: true,
      sortable: true,
    }
  ];

  const Data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'John Doe', age: 30 },
    { id: 4, name: 'Jane Smith', age: 25 },
    { id: 5, name: 'John Doe', age: 30 },
    { id: 6, name: 'Jane Smith', age: 25 },
    // ... more data
  ];

  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };

  return (
    <>
      <div className="friends_wrapper">
        <div className="qr_connect">
          <div className="qr_code">
            <img src={QR} alt="" />
          </div>
          <div className="scan_show_qr_btns">
            <button>Scan QR</button>
            <button>Show QR</button>
          </div>
        </div>
        <div className="add_contacts">
          <DataTable
            data={Data}
            selectableRows
            onSelectedRowsChange={handleChange}
            columns={columns}
            pagination
          />
          <div className="add_group_btn">
            <button>+ Add to Group</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Friends
