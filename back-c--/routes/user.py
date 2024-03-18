from config.database import engine, User
from fastapi import FastAPI, APIRouter
from fastapi.responses import JSONResponse 
from sqlmodel import Session
from passlib.hash import pbkdf2_sha256
from sqlite3 import IntegrityError

user = APIRouter(prefix='/user', tags=['User'])

@user.post('/')
def create_user(new_user: User) -> JSONResponse:
    new_user.password = pbkdf2_sha256.hash(new_user.password)
    with Session(engine) as session:
        try:
            session.add(new_user)
            session.commit()
        except IntegrityError:
            session.rollback()
            return JSONResponse({'msg': 'User is already registered'}, status_code=401) 
    return JSONResponse({'msg': 'Success'}, status_code=201) 

@user.put('/')
def update_user_info() -> JSONResponse:
    return JSONResponse({'msg': 'Update successful'}) 
