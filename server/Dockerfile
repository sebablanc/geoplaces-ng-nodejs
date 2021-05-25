FROM python:3.10.0b1-alpine3.12


WORKDIR /geoplaces-server
COPY . .
RUN pip install flask redis flask_cors

CMD ["python3", "app.py"]