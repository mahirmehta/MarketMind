import React, { useState, useEffect, useCallback } from 'react';
import './Dashboard.css';
import Footer from '../Footer';
import Papa from 'papaparse';

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState('');
  const [stockInfo, setStockInfo] = useState(null);
  const [sentimentGraph, setSentimentGraph] = useState(null);
  const [news, setNews] = useState([]);

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

  useEffect(() => {
    if (selectedStock) {
      fetchNews(selectedStock);
    }
  }, [selectedStock, fetchNews]);

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
            <img src={`/images/lstm.${stockInfo}.NS.png`} alt="Chart 2" />
            <img src={`/images/arima.${stockInfo}.NS.png`} alt="Chart 3" />
            <img src={`/images/sarima.${stockInfo}.NS.png`} alt="Chart 4" />
          </div>
          {/* Display sentiment graph */}
          <br />
          <h2>Market Sentiments:</h2>
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
      <Footer />
    </div>
  );
}

export default Dashboard;
