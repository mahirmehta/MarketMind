import json
import urllib.request
import csv
from datetime import datetime, timedelta

apikey = "92286880232bedb4f9b1fcae0154d838"

# List of banks
banks = ['HDFC', 'SBI', 'ICICI']

# Specify the CSV file name
csv_file_name = "bank_news.csv"

# Open the CSV file in append mode
with open(csv_file_name, mode='a', newline='', encoding='utf-8') as csv_file:
    # Create a CSV writer object
    csv_writer = csv.writer(csv_file)

    # If the file is empty, write the header row
    if csv_file.tell() == 0:
        csv_writer.writerow(['Bank', 'Title', 'Description', 'Published At'])

    # Calculate the start date (30 days ago from today)
    start_date = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')

    # Loop through each bank
    for bank in banks:
        # Build the URL for the bank with the date range
        url = f"https://gnews.io/api/v4/search?q={bank}&lang=en&country=in&max=5&from={start_date}&apikey={apikey}"

        # Fetch data from the API
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode("utf-8"))
            articles = data["articles"]

            # Write data for each article to the CSV file
            for article in articles:
                title = article['title']
                description = article['description']
                published_at = article['publishedAt']

                # Check if the article is within the last 30 days
                article_date = datetime.strptime(published_at, '%Y-%m-%dT%H:%M:%SZ')
                if article_date >= (datetime.now() - timedelta(days=30)):
                    # Write the data to the CSV file
                    csv_writer.writerow([bank, title, description, published_at])

                    # Print the data to the console
                    print(f"Bank: {bank}")
                    print(f"Title: {title}")
                    print(f"Description: {description}")
                    print(f"Published At: {published_at}")
                    print("--------")

# Inform the user about the CSV file update
print(f"New data within the last 30 days has been added to {csv_file_name}")
