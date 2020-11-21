import pandas as pd

load_file = "WebVisualizations/Resources/cities.csv"

cities_data_df = pd.read_csv(load_file)
cities_data_df

html = cities_data_df.to_html()

text_file = open("data.html", "w")
text_file.write(html)
text_file.close()
