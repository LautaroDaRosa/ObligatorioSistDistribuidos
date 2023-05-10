import requests


def jwt_middleware(token_endpoint):
    def middleware(next):
        def handler(request, *args, **kwargs):
            authorization_header = request.headers.get('Authorization')

            if not authorization_header:
                return {'message': 'Unauthorized'}, 401

            bearer, token = authorization_header.split(' ')

            if not token or bearer != 'Bearer':
                return {'message': 'Invalid authorization header'}, 401

            response = requests.get(token_endpoint, headers={'Authorization': f'Bearer {token}'})

            if not response.ok:
                return {'message': 'Invalid token'}, 401

            role = response.json()['role']
            request.role = role

            return next(request, *args, **kwargs)

        return handler

    return middleware
