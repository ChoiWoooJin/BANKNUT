from fastapi import FastAPI, File, UploadFile, Form
from pathlib import Path
import requests
import cv2
import os
import numpy as np
from os import listdir
from os.path import isdir, isfile, join
from typing import List

from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# 파일 업로드 디렉터리 생성
upload_dir = Path("faces")
upload_dir.mkdir(exist_ok=True)

origins = [
    "http://j9c206.p.ssafy.io:8090",  # Spring Boot가 실행되는 주소. 실제 주소로 변경 필요.
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# 얼굴 인식용 haar/cascade 로딩
face_classifier = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')


# @app.post("/upload_and_train/")
# async def upload_and_train(
#     name: str = Form(...),
#     files: List[UploadFile] = File(...),
#     accountNum: int = Form(...),        # 계좌 번호 추가
#     password: int = Form(...)           # 비밀번호 추가
# ):
#     # 외부 API 호출
#     response = requests.post(
#         "http://j9c206.p.ssafy.io:8090/api/account/uuid",
#         json={
#             "accountNum": accountNum,
#             "password": password,
#             "name": name
#         }
#     )
#     response.raise_for_status()
#
#     # 응답 값을 사용하여 폴더 생성
#     directory_name = response.text
#     folder_path = upload_dir / directory_name
#     folder_path.mkdir(exist_ok=True)
#
#     # Upload files to the directory
#     uploaded_files = []
#     for file in files:
#         try:
#             file_path = folder_path / file.filename
#             with open(file_path, "wb") as image:
#                 image.write(file.file.read())
#             uploaded_files.append(file.filename)
#         except Exception as e:
#             return {"error": f"Upload of {file.filename} failed: {str(e)}"}
#
#     # Train the model
#     model = train(name, directory_name)
#     if model:
#         return {
#             "message": f"Upload successful and model for {name} trained and saved to {directory_name}",
#             "uploaded_files": uploaded_files
#         }
#     else:
#         return {"message": f"Upload successful but no data to train for {name}."}


@app.post("/upload_and_train/")
async def upload_and_train(
    uuid: str = Form(...),  # 여기서 UUID를 받아옵니다.
    files: List[UploadFile] = File(...)
):
    folder_path = upload_dir / uuid
    folder_path.mkdir(parents=True, exist_ok=True)

    # Upload files to the directory
    uploaded_files = []
    for file in files:
        try:
            file_path = folder_path / file.filename
            with open(file_path, "wb") as image:
                image.write(file.file.read())
            uploaded_files.append(file.filename)
        except Exception as e:
            return {"error": f"Upload of {file.filename} failed: {str(e)}"}

    # Train the model
    model = train(uuid, folder_path)
    if model:
        return {
            "message": f"Upload successful and model for UUID {uuid} trained and saved.",
            "uploaded_files": uploaded_files
        }
    else:
        return {"message": f"Upload successful but no data to train for UUID {uuid}."}

def train(name, directory_name):
    data_path = directory_name
    face_pics = [f for f in listdir(data_path) if isfile(join(data_path, f))]
    Training_Data, Labels = [], []

    for i, files in enumerate(face_pics):
        image_path = data_path / face_pics[i]
        images = cv2.imread(str(image_path), cv2.IMREAD_GRAYSCALE)
        if images is None:
            continue
        Training_Data.append(np.asarray(images, dtype=np.uint8))
        Labels.append(i)

    if len(Labels) == 0:
        print("There is no data to train.")
        return None

    Labels = np.asarray(Labels, dtype=np.int32)
    model = cv2.face.LBPHFaceRecognizer_create()
    model.train(np.asarray(Training_Data), np.asarray(Labels))
    model_save_path = 'models/' + name + '_model.yml'
    model.save(model_save_path)

    return model

@app.get("/hello")
def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)