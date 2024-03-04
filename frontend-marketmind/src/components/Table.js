import React from 'react';
import './Table.css';

const Table = () => {
  const companyIndustryMap = {
    'HDFCBANK': 'Bank - Private',
    'ICICIBANK': 'Bank - Private',
    'AXISBANK': 'Bank - Private',
    'KOTAKBANK': 'Bank - Private',
    'PNB': 'Bank - Public',
    'AUBANK': 'Bank - Private',
    'BANKBARODA': 'Bank - Public',
    'INDUSINDBK': 'Bank - Private',
    'FEDERALBNK': 'Bank - Private',
    'SBIN': 'Bank - Public',
    'BANDHANBNK': 'Bank - Private',
    'IDFCFIRSTB': 'Bank - Private'
  };

  const companyNames = Object.keys(companyIndustryMap);

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Industry</th>
            <th>Last Price</th>
            <th>Change</th>
            <th>%Chg</th>
            <th>Mkt Cap (Rs cr)</th>
          </tr>
        </thead>
        <tbody>
          {companyNames.map((companyName, index) => (
            <tr key={index}>
              <td>{companyName}</td>
              <td>{companyIndustryMap[companyName]}</td>
              <td>{/* Last Price */}</td>
              <td>{/* Change */}</td>
              <td>{/* %Chg */}</td>
              <td>{/* Mkt Cap (Rs cr) */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
