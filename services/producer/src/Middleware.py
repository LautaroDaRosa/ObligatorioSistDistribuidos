import requests
from fastapi.exceptions import HTTPException


def jwt_middleware(token_endpoint):
    def middleware(next, request):
        async def handler(*args, **kwargs):
            authorization_header = request.headers.get('Authorization')

            if not authorization_header:
                raise HTTPException(status_code=401, detail='Unauthorized')

            authorization_array = authorization_header.split(' ')
            if len(authorization_array) != 2:
                raise HTTPException(status_code=401, detail='Invalid authorization header')
            bearer, token = authorization_array

            if not token or bearer != 'Bearer':
                raise HTTPException(status_code=401, detail='Invalid authorization header')

            response = requests.get(token_endpoint, headers={'Authorization': f'Bearer {token}'})

            if not response.ok:
                raise HTTPException(status_code=401, detail='Invalid token')

            return await next(request, *args, **kwargs)

        return handler

    return middleware
