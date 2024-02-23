import csv
import math
import matplotlib.pyplot as plt
import matplotlib.patches as patches

# Read sentiment scores from CSV file
sentiment_scores = []
with open("HDFC_Sentiments.csv", "r", newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        sentiment_scores.append(float(row["Description_Sentiment"]))

# Calculate average sentiment score
average_score = sum(sentiment_scores) / len(sentiment_scores)

# Define sentiment categories and corresponding colors
sentiment_categories = ["Strong Sell", "Sell", "Neutral", "Buy", "Strong Buy"]
sentiment_colors = ["red", "orange", "yellow", "green", "limegreen"]

# Set up the figure and axes
fig, ax = plt.subplots(figsize=(6, 3))

# Create a semicircular dial
dial = patches.Arc((0, 0), width=2, height=1, angle=0, theta1=0, theta2=180, linewidth=3, edgecolor='black', facecolor='lightgray')
ax.add_patch(dial)

# Add ticks for sentiment categories
for i, category in enumerate(sentiment_categories):
    angle = i * (180 / (len(sentiment_categories) - 1))
    x = math.cos(math.radians(angle)) * 0.9
    y = math.sin(math.radians(angle)) * 0.9
    ax.text(x, y, category, ha='center', va='center')

# Calculate the angle for the needle
angle = (average_score / 1) * 180

# Draw the needle
needle = patches.Arrow(0, 0, math.cos(math.radians(angle)), math.sin(math.radians(angle)),
                       width=0.05, color='red', edgecolor='black')
ax.add_patch(needle)

# Set axis limits and aspect ratio
ax.set_xlim(-1.1, 1.1)
ax.set_ylim(-0.1, 1.1)
ax.set_aspect('equal', adjustable='box')

# Hide axes
ax.axis('off')

# Set title
ax.set_title('Sentiment Analysis Gauge')

# Show the plot
plt.show()
