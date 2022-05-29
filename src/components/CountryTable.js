/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';

function CountryTable() {
  const [tableData, setTableData] = useState([]);
  const apiUrl = 'https://restcountries.com/v3.1/all';
  /*
    useEffect hook fetches data from the API on initial render
  */
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonData) => {
        setTableData(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /**
   * Creates object of given params
   * @param {number} - Index of current value
   * @param {string} - Flag URL address
   * @param {string} - Name of the country
   * @param {object} - Capital of the country
   * @param {object} - Currency object
   * @param {object} - Language object
   * @param {number} - Number of population
   * @return {object} - Object of given values
   */

  const createData = (
    index,
    flag,
    country,
    capital,
    currency,
    languages,
    population
  ) => {
    return {
      index,
      flag,
      country,
      capital,
      currency,
      languages,
      population
    };
  };

  /*
    Function creates data for each row in the CountryTable component
  */
  const createRowData = (data) => {
    return data.map((value, index) => {
      return createData(
        index,
        value.flags.svg,
        value.name.common,
        value.capital,
        value.currencies,
        value.languages,
        value.population
      );
    });
  };

  /**
   * Loops through object values
   * @param {object} - Object to loop trough
   * @return {string} - The result of given values as a string
   */

  function getObjectValues(params) {
    const obj = params.value;
    let formatedObjValue = '';
    if (obj != null) {
      Object.keys(obj).forEach(function (item, index, arr) {
        if (params.field === 'languages') {
          if (!obj[index + 1]) {
            arr[index + 1]
              ? (formatedObjValue += obj[item] + ', ')
              : (formatedObjValue += obj[item]);
          }
        } else {
          formatedObjValue += obj[item].name + ' (' + obj[item].symbol + ')';
        }
      });
      return formatedObjValue;
    }
  }

  const rows = createRowData(tableData);

  const customCellValueRenderer = (params) => {
    if (params.value) {
      return <p style={{ whiteSpace: 'normal' }}>{params.value}</p>;
    } else {
      return (
        <p style={{ whiteSpace: 'normal', color: '#ff0000' }}>No data found!</p>
      );
    }
  };

  const columns = [
    {
      field: 'flag',
      headerName: 'Flag',
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <img width={'50px'} src={params.row.flag} alt="" />
          </div>
        );
      }
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 200,
      renderCell: customCellValueRenderer
    },
    {
      field: 'capital',
      headerName: 'Capital',
      width: 300,
      renderCell: customCellValueRenderer
    },
    {
      field: 'currency',
      headerName: 'Currency',
      valueGetter: getObjectValues,
      width: 300,
      renderCell: customCellValueRenderer
    },
    {
      field: 'languages',
      headerName: 'Official languages',
      valueGetter: getObjectValues,
      width: 300,
      renderCell: customCellValueRenderer
    },
    { field: 'population', headerName: 'Population', width: 250 }
  ];

  return tableData.length > 0 && <DataTable rows={rows} columns={columns} />;
}

export default CountryTable;
