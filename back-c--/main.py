from fastapi import FastAPI, APIRouter
from fastapi.responses import RedirectResponse
from uvicorn import run as run_app
from config.database import create_db
from fastapi.middleware.cors import CORSMiddleware
from routes import user, auth

app = FastAPI(debug=True, title='NeforStore')
app_name = 'main:app'

app.add_middleware(CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
)

app.include_router(auth.auth)
app.include_router(user.user)

@app.get('/')
def index():
        return RedirectResponse('/docs', 303)

def main():
        create_db()
        run_app(app_name, reload=True)

if __name__=='__main__':
        main()
