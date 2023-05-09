FROM devopsfaith/krakend:latest

COPY krakend.json /etc/krakend/krakend.json

EXPOSE 8080

CMD ["/usr/bin/krakend", "run", "-d", "-c", "/etc/krakend/krakend.json"]
