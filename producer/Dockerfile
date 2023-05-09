FROM python:3

WORKDIR /src
COPY src/requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY /src/main.py .

CMD [ "python", "main.py"]