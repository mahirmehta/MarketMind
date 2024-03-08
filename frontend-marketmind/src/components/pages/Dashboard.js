import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Footer from '../Footer';

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState('');
  const [stockInfo, setStockInfo] = useState(null);
  const [sentimentGraph, setSentimentGraph] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (selectedStock) {
      fetchNews(selectedStock);
    }
  }, [selectedStock]);

  const fetchNews = (selectedStock) => {
    // Assuming your CSV files are stored in a folder named 'data' 
    fetch(`/src/components/2024/${selectedStock}_news.csv`)
      .then(response => response.text())
      .then(data => {
        // Parse CSV data
        const parsedData = parseCSVData(data);
        setNews(parsedData);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  };

  const parseCSVData = (csvData) => {
    // Split CSV data by line and parse it into objects
    const rows = csvData.split('\n');
    const parsedData = rows.map(row => {
      const [title, description] = row.split(',');
      return { title, description };
    });
    // Remove header row if present
    if (parsedData.length > 0 && parsedData[0].title === 'Title') {
      parsedData.shift();
    }
    return parsedData;
  };

  const handleStockChange = (event) => {
    const selected = event.target.value;
    setSelectedStock(selected);
    // Here, you can fetch the relevant data for the selected stock
    // and update the state to display information accordingly.
    // For simplicity, I'll just set the stockInfo with the selected stock name.
    setStockInfo(selected);
    // Assume sentiment graph data is fetched here
    // For demonstration purposes, let's set some dummy data
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
          <h2>Sentiments:</h2>
          {sentimentGraph && (
            <div className="sentiment-graph">
              <img src={`/images/sentiment.${stockInfo}.NS.png`} alt="Sentiment Graph" />
            </div>
          )}
          {/* Display news */}
          <div className="news">
            <h2>News:</h2>
            <ul>
              {news.map((item, index) => (
                <li key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Dashboard;
