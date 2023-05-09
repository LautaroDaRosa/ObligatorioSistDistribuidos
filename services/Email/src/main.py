import smtplib
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class Email(BaseModel):
    subject: str #Asunto
    body: str #Cuerpo

app = FastAPI()

@app.post("/email")
def email(email : Email):
    try:
        return JSONResponse(content = send_email(email), status_code = 200)
    except:
        message = "Error executing request"
        return JSONResponse(content = message, status_code = 500)

def get_recipients_emails():
    return ["sisdistribuidos.no.reply@gmail.com"]

def send_email(email):
    # Configuración del correo electrónico
    sender_email = "sisdistribuidos.no.reply@gmail.com"
    sender_password = "tgaryhzzmziehmbp"
    subject = email.subject
    body = email.body
    
    sended_emails = 0

    recipient_emails_list = get_recipients_emails()
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(sender_email, sender_password)

    recipient_emails_count = len(recipient_emails_list)

    for recipient_email in recipient_emails_list :
        # Crear el objeto de mensaje
        msg = MIMEMultipart()
        msg["From"] = sender_email
        msg["To"] = recipient_email
        msg["Subject"] = subject
        
        # Agregar el mensaje al objeto de mensaje
        msg.attach(MIMEText(body, "plain"))
        
        # Conectarse al servidor SMTP y enviar el correo electrónico
        try:
            text = msg.as_string()
            server.sendmail(sender_email, recipient_email, text)
            print("Correo electrónico enviado a " + recipient_email + " correctamente :)")
            sended_emails += 1
        except Exception as e:
            print("Error al enviar el correo electrónico:")
            print("El error es: " +  e.__str__())
    server.quit()
    message = "Se enviaron " + str(sended_emails) + " de " + str(recipient_emails_count)
    print(message)
    return message

if __name__ == "__main__":
    uvicorn.run(app, port=80, host="0.0.0.0")