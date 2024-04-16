import pandas as pd
import os

# Function to calculate moving average
def calculate_moving_average(row, window_size):
    return row.rolling(window=window_size).mean()

# Directory containing CSV files
directory = 'frontend-marketmind/public/data'

# Iterate through files in the directory
for filename in os.listdir(directory):
    if filename.startswith("merged") and filename.endswith(".csv"):
        filepath = os.path.join(directory, filename)
        # Read CSV file
        df = pd.read_csv(filepath)

        # Specify columns for which moving average is to be calculated
        columns_to_average = ['Arima_Close', 'Lstm_Close', 'Sarima_Close']

        # Calculate average of specified columns
        df['Average_Close'] = df[columns_to_average].mean(axis=1)

        # Calculate moving average for each row in the Average_Close column
        window_size = 3  # You can adjust the window size as needed
        df['Average_Close'] = df['Average_Close'].rolling(window=window_size).mean()

        # Save the updated dataframe to the same CSV file
        df.to_csv(filepath, index=False)

        print(f"Moving average calculated and saved for file: {filename}")
