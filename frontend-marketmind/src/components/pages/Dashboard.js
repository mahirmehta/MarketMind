import React, { useState, useEffect, useCallback } from 'react';
import './Dashboard.css';
import Papa from 'papaparse';

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState('');
  const [stockInfo, setStockInfo] = useState(null);
  const [sentimentGraph, setSentimentGraph] = useState(null);
  const [news, setNews] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [currentDateIndex, setCurrentDateIndex] = useState(-1);

  const fetchNews = useCallback((selectedStock) => {
    fetch(`/data/${selectedStock}_news.csv`)
      .then(response => response.text())
      .then(data => {
        const parsedData = parseCSVData(data);
        setNews(parsedData);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const fetchPredictions = useCallback((selectedStock) => {
    fetch(`/data/merged.${selectedStock}.data.csv`)
      .then(response => response.text())
      .then(data => {
        const parsedData = parseCSVData(data);
        setPredictions(parsedData);
      })
      .catch(error => {
        console.error('Error fetching predictions:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedStock) {
      fetchNews(selectedStock);
      fetchPredictions(selectedStock);
    }
  }, [selectedStock, fetchNews, fetchPredictions]);

  useEffect(() => {
    if (predictions.length > 0) {
      const today = getFormattedDate();
      const index = predictions.findIndex(prediction => prediction.Date === today);
      setCurrentDateIndex(index);
    }
  }, [predictions]);

  const parseCSVData = (csvData) => {
    const parsedData = Papa.parse(csvData, {
      header: true,
      delimiter: ',',
      dynamicTyping: true,
      transform: (value, { header }) => {
        if (header === 'Description') {
          return value.replace(/"/g, ''); // Remove double quotes from the description
        }
        return value;
      }
    });
    return parsedData.data;
  };

  const handleStockChange = (event) => {
    const selected = event.target.value;
    setSelectedStock(selected);
    setStockInfo(selected);
    setSentimentGraph(`./images/${selected}-sentiment.jpg`);
  };

  const getFormattedDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  return (
    <div>
      <h1 className='dashboard'>
        <br />
        Dashboard
      </h1>
      <div className="dropdown-container">
        <select value={selectedStock} onChange={handleStockChange}>
          <option value="">Select a stock</option>
          {['HDFCBANK', 'ICICIBANK', 'AXISBANK', 'KOTAKBANK', 'PNB', 'AUBANK', 'BANKBARODA', 'INDUSINDBK', 'FEDERALBNK', 'SBIN', 'BANDHANBNK', 'IDFCFIRSTB'].map(stock => (
            <option key={stock} value={stock}>{stock}</option>
          ))}
        </select>
      </div>
      {stockInfo && (
        <div className="dashboard-container">
          <h2>Selected Stock: {stockInfo}</h2>
          {/* Display stock images */}
          <div className="stock-images">
            <img src={`/images/CP.${stockInfo}.NS.png`} alt="Chart 1" />
            <img src={`/images/prediction.lstm_${stockInfo}.NS.png`} alt="Chart 2" />
            <img src={`/images/prediction.arima_${stockInfo}.NS.png`} alt="Chart 3" />
            <img src={`/images/prediction.sarima_${stockInfo}.NS.png`} alt="Chart 4" />
          </div>
          {/* Display sentiment graph */}
          <br />
          <h2>Trendline Analysis:</h2>
          <p>Bank: {stockInfo}</p>
          {sentimentGraph && (
            <div className="trendline-graph">
              <img src={`/images/tr.${stockInfo}.NS.png`} alt="Trendline Graph" />
            </div>
          )}
          {/* Display predictions table */}
          <div className="predictions">
            <h2>Prediction:</h2>
            <p>Today's Date: {getFormattedDate()}</p>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>ARIMA close price</th>
                  <th>LSTM close price</th>
                  <th>SARIMA close price</th>
                  <th className="average-column">Average price (MA)</th> {/* Add className here */}
                </tr>
              </thead>
              <tbody>
                {currentDateIndex !== -1 && predictions.slice(currentDateIndex - 7, currentDateIndex + 7).map((item, index) => (
                  <tr key={index}>
                    <td>{item.Date}</td>
                    <td>{item.Arima_Close}</td>
                    <td>{item.Lstm_Close}</td>
                    <td>{item.Sarima_Close}</td>
                    <td className="average-column">{item.Average_Close}</td> {/* Add className here */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Display sentiment graph */}
          <br />
          <h2>Market Sentiments:</h2>
          <p>Bank: {stockInfo}</p>
          {sentimentGraph && (
            <div className="sentiment-graph">
              <img src={`/images/SG.${stockInfo}.NS.png`} alt="Sentiment Graph" />
            </div>
          )}
          {/* Display news */}
          <div className="news">
            <h2>News Headlines:</h2>
            {news.slice(0, 7).map((item, index) => (
              <div key={index} className="card">
                <h3>{item.Title}</h3>
                <p>{item.Description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
