from flask import Flask, render_template, Response
import cv2
import sys
import numpy as np 


app = Flask(__name__, template_folder='template')


@app.route('/')
def index():
    return render_template('index.html')


# def get_Frame():
#     camera_port=0
#     camera=cv2.VideoCapture(camera_port) #this makes a web cam object
    
#     subtractor = cv2.createBackgroundSubtractorMOG2(varThreshold=25)

#     while True:
#         retval, im = camera.read()
#         mask = subtractor.apply(im)
        



#         imgencode=cv2.imencode('.jpg',mask)[1]
#         stringData=imgencode.tostring()
#         yield (b'--frame\r\n'
#             b'Content-Type: text/plain\r\n\r\n'+stringData+b'\r\n')

#     del(camera)


# def get_Frame():
#     camera_port = 0;
#     camera = cv2.VideoCapture(camera_port)
    
#     while True:
#         _, frame = camera.read()
#         hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

#         # low_red = np.array([0,42,0])
#         # high_red = np.array([179,255,255])

#         low_red = np.array([0,30,60])
#         high_red = np.array([20,150,255])
#         mask = cv2.inRange(hsv_frame, low_red, high_red)
#         image = cv2.bitwise_and(frame,frame,mask=mask)


    
#         imgencode=cv2.imencode('.jpg',image)[1]
#         stringData=imgencode.tostring()
#         yield (b'--frame\r\n'
#             b'Content-Type: text/plain\r\n\r\n'+stringData+b'\r\n')

#     del(camera)


# def get_Frame():
#     face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_alt2.xml')
#     cap = cv2.VideoCapture(0)

#     while True:
#         _, img = cap.read()

#     gray = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
#     faces = face_cascade.detectMultiScale(gray, 1.1,4)

#     for (x,y,w,h) in faces:
#         cv2.rectangle(img, (x,y), (x+w, y+h), (255,0,0), 2)


#     imgencode=cv2.imencode('.jpg',img)[1]
#     stringData=imgencode.tostring()
#     yield (b'--frame\r\n'
#     b'Content-Type: text/plain\r\n\r\n'+stringData+b'\r\n')

#     del(camera)


@app.route('/video_feed')
def video_feed():
      return Response(get_Frame(),mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='localhost', debug=True, threaded=True)