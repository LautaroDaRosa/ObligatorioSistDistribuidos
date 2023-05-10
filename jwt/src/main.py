from fastapi import FastAPI, Header, HTTPException
from typing import Optional
from cryptography.hazmat.primitives import serialization, hashes
from cryptography.hazmat.primitives.asymmetric import rsa

import DatabaseManager
import datetime
import jwt
import uvicorn

PRIVATE_KEY_FILE = 'private_key.pem'
PUBLIC_KEY_FILE = 'public_key.pem'

# Generate a new RSA key pair
key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048
)

# Serialize the private key to PEM format and save it to a file
with open(PRIVATE_KEY_FILE, 'wb') as f:
    f.write(key.private_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PrivateFormat.PKCS8,
        encryption_algorithm=serialization.NoEncryption()
    ))

# Serialize the public key to PEM format and save it to a file
with open(PUBLIC_KEY_FILE, 'wb') as f:
    f.write(key.public_key().public_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PublicFormat.SubjectPublicKeyInfo
    ))

#------------------------

with open(PRIVATE_KEY_FILE, 'rb') as f:
    private_key = f.read()

with open(PUBLIC_KEY_FILE, 'rb') as f:
    public_key = f.read()

#------------------------

def generate_token(username):
    payload = {
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=30),
        'iat': datetime.datetime.utcnow(),
        'sub': username
    }
    return jwt.encode(
        payload,
        private_key,
        algorithm='RS256'
    )

def verify_token(token):
    try:
        payload = jwt.decode(token, public_key, algorithms=['RS256'])
        return payload['sub']
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail='Token has expired. Please log in again.')
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail='Invalid token. Please log in again.')

#------------------------

def check_credentials(username, password):
    user_credentials = DatabaseManager.check_credentials(username, password)
    return user_credentials
    ##if (username_db == username
    ##    and password_db == password):
    ##    return role
    ##raise HTTPException(status_code = 401, detail = "Failed to authenticate. Try again")

#------------------------

app = FastAPI()

@app.get("/check_token")
def check_jwt(authorization: Optional[str] = Header(None)):
    try:
        token = authorization.split(' ')[1]
        role = verify_token(token)
        return {role}
    except:
        raise HTTPException(status_code = 403, detail = 'Unauthorized')

@app.get("/get_token")
def get_jwt(username: str, password: str):
    role = check_credentials(username, password)        
    return {"token": generate_token(role)}

if __name__ == '__main__':
    uvicorn.run(app, port=8080, host="0.0.0.0")