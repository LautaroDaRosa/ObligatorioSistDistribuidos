import requests
import threading
import time

def send_request():
    url = 'https://example.com'  # Replace with your URL
    response = requests.get(url)
    print(response.status_code)  # Print the response status code

def start_service():
    while True:
        send_request()
        time.sleep(10)  # Wait for 10 seconds before sending the next request

if __name__ == '__main__':
    t = threading.Thread(target=start_service)
    t.start()
