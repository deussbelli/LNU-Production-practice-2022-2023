import jwt
from fastapi import APIRouter
from fastapi.responses import JSONResponse

auth = APIRouter(prefix='/auth', tags=['Auth'])


@auth.post('/register')
async def register() -> JSONResponse:
    return JSONResponse({}, 400)


@auth.get('/login')
def login() -> JSONResponse:
    return


@auth.get('/refresh')
def refresh_token() -> JSONResponse:
    return