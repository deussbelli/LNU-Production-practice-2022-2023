from fastapi import FastAPI
from fastapi.responses import JSONResponse, PlainTextResponse
from fastapi import APIRouter 
from typing import List  

items = APIRouter() 

items_list = [        {"id": 1, "image_link": "http://", "vender_code": "0000001", "name": "Cothic hat", "price": 150}, 
        {"id": 2, "image_link": "http://",  "vender_code": "0000002", "name": "Gothic mittens", "price": 190},  
        {"id": 3, "image_link": "http://",  "vender_code": "0000003", "name": "Cothic dress", "price": 200}, 
        {"id": 4, "image_link": "http://",  "vender_code": "0000004", "name": "Gothic costume", "price": 500},    ]

@items.get('/items') 
async def get_items(): 
    return JSONResponse(content=items_list, status_code=200)