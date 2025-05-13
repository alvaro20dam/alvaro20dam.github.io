import pandas as pd 


def load_listings():
    return pd.read_csv('listings.csv')

def load_reviews():
    return pd.read_csv('reviews.csv')