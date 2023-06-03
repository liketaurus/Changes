from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/horoscope/<sign>')
def get_horoscope(sign):
    url = f'https://telegraf.com.ua/lifestyle/goroskop/sign/{sign}/'
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': f'Request failed with status code {response.status_code}'}), 400
    soup = BeautifulSoup(response.text, 'html.parser')
    horoscope = soup.find('div', class_='s-content s-content--static').text
    horoscope = horoscope.replace('\n', '').replace('\xa0', ' ')
    return jsonify({'horoscope': horoscope})

if __name__ == '__main__':
    app.run()

# приклад використання в JavaScript
# fetch('/horoscope/taurus')
#   .then(response => response.json())
#   .then(data => console.log(data.horoscope))
#   .catch(error => console.error(error));


# pip3 install -r requirements.txt --user