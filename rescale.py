# Here we will learn how to resize your video or img 

import cv2 as cv

img  =  cv.imread('my-min.jpg')
cv.imshow('Me' , img)


 
 
 
 
 
 # This function is for standalone videos 
 
def rescaleFrame(frame , scale = 0.25):
    width = int(frame.shape[1] * scale)
    height = int(frame.shape[0] * scale)
    
    dimension = (width, height)
    
    return cv.resize(frame , dimension , interpolation=cv.INTER_AREA)

def changeRes(width, height):
     capture.set(3 , width)
     capture.set(4 , height)
 


resized_img = rescaleFrame(img)
cv.imshow('Me_resized' , resized_img)

 # This function is for live videos 


capture = cv.VideoCapture('video.mp4')
# while True:
#     isTrue, frame = capture.read()  # this will read the video which returns a boolean value
    
#     frame_resized = rescaleFrame(frame)
     
#     cv.imshow('Video', frame)  # This will display frame by frame
#     cv.imshow('Video Resized', frame_resized) # This will display frame by frame 
#     if cv.waitKey(5) & 0xFF==ord('d'): 
#        break

# capture.release()
# cv.destroyAllWindows()

cv.waitKey(0)
