import cv2
# face_cascade=cv2.CascadeClassifier('C:\Users\Tea\Documents\Image Classifier\env\haarcascade_frontalface_alt2.xml')
# ds_factor=0.6

class Camera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
    
    def __del__(self):
        self.video.release()
    
    def get_Frame(self):
        ret, frame = video.read()