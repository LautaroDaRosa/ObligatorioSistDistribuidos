FROM python:3

WORKDIR /src
COPY src/requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY /src .
COPY private_key.pem .
COPY public_key.pem .

CMD [ "python", "main.py"]