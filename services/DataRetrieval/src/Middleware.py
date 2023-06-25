import requests
from starlette.requests import Request

def jwt_middleware(token_endpoint):
    def middleware(next, request):
        def handler(*args, **kwargs):
            print("Se ejecuta el Middleware")

            authorization_header = request.headers.get('Authorization')

            if not authorization_header:
                print("No autorizado")
                return {'message': 'Unauthorized'}, 401

            bearer, token = authorization_header.split(' ')

            if not token or bearer != 'Bearer':
                print("No autorizado")
                return {'message': 'Invalid authorization header'}, 401

            response = requests.get(token_endpoint, headers={'Authorization': f'Bearer {token}'})

            if not response.ok:
                print("No autorizado")
                return {'message': 'Invalid token'}, 401

            ##username = response.json()['username']
            ##request.username = username

            return next(request, *args, **kwargs)

        return handler

    return middleware