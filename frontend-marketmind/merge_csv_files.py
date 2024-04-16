import os
import pandas as pd
from datetime import datetime

# Path to the data folder
data_folder = 'frontend-marketmind/public/data'

# Get a list of all CSV files in the data folder
csv_files = [file for file in os.listdir(data_folder) if file.endswith('.csv')]

# Dictionary to store dataframes for each model
dfs = {'arima': {}, 'lstm': {}, 'sarima': {}}

# Iterate through each CSV file and populate the dictionary
for file in csv_files:
    if file.startswith('pred.arima'):
        bank_name = file.split('.')[2]
        dfs['arima'][bank_name] = pd.read_csv(os.path.join(data_folder, file))
    elif file.startswith('pred.lstm'):
        bank_name = file.split('.')[2]
        dfs['lstm'][bank_name] = pd.read_csv(os.path.join(data_folder, file))
    elif file.startswith('pred.sarima'):
        bank_name = file.split('.')[2]
        dfs['sarima'][bank_name] = pd.read_csv(os.path.join(data_folder, file))

# Merge dataframes with the same bank name and change date pattern
for bank_name in dfs['arima']:
    if bank_name in dfs['lstm'] and bank_name in dfs['sarima']:
        df_arima = dfs['arima'][bank_name]
        df_lstm = dfs['lstm'][bank_name]
        df_sarima = dfs['sarima'][bank_name]
        
        merged_df = pd.merge(df_arima, df_lstm, on='Date')
        merged_df = pd.merge(merged_df, df_sarima, on='Date')
        
        # Rename columns
        merged_df.columns = ['Date', 'Arima_Close', 'Lstm_Close', 'Sarima_Close']
        
        # Change date pattern to dd-mm-yyyy
        merged_df['Date'] = pd.to_datetime(merged_df['Date']).dt.strftime('%d-%m-%Y')
        
        # Save the merged dataframe to a CSV file with the bank name
        output_filename = f'merged.{bank_name}.data.csv'
        merged_df.to_csv(output_filename, index=False)
