from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates
# from fastapi.staticfiles import StaticFiles

router = APIRouter()

templates = Jinja2Templates(directory="templates")
# router.mount("/static",StaticFiles(directory="static"),name="static")

@router.get("/")
async def index(request:Request):
    return templates.TemplateResponse("index.html",{"request":request})

@router.get("/ui-ux")
async def uiux(request:Request):
    return templates.TemplateResponse("ui-ux.html",{"request":request})

@router.get("/software-development")
async def software_development(request:Request):
    return templates.TemplateResponse("software-development.html",{"request":request})

@router.get("/resume-cv")
async def resume(request:Request):
    return templates.TemplateResponse("resume.html",{"request":request})

@router.get("/want-to-hire-me")
async def hire_me(request:Request):
    return templates.TemplateResponse("hire-me.html",{"request":request})

@router.get("/my-profile")
async def profile(request:Request):
    return templates.TemplateResponse("my-profile.html",{"request":request})

@router.get("/blogs-and-articles")
async def blogs_article(request:Request):
    return templates.TemplateResponse("blog-article.html",{"request":request})

@router.get("/skills")
async def skills(request:Request):
    return templates.TemplateResponse("skills.html",{"request":request})

@router.get("/hobbies-and-interest")
async def hobbies_interest(request:Request):
    return templates.TemplateResponse("hobbies-interest.html",{"request":request})

@router.get("/connect-with-me")
async def connect_with_me(request:Request):
    return templates.TemplateResponse("connect-with-me.html",{"request":request})