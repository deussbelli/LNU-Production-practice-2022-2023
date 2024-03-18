from os import environ as env
from dotenv import load_dotenv

load_dotenv('.env')

class Config:
    DATABASE_URL=env.get('DATABASE_URL')
    SECRET_KEY=env.get('SECRET_KEY')