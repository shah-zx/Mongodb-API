import cv2 as cv
# We are capturing the photo using the variable img
# img = cv.imread('Polygons.jpeg')
# cv.imshow('Me', img)
# cv.waitKey(0)  # Time in miliseconds

# Reading videos

capture = cv.VideoCapture('video.mp4')
while True:
    isTrue, frame = capture.read()  # this will read the video which returns a boolean value 
    cv.imshow('Video', frame)  # This will display frame by frame 
    if cv.waitKey(5) & 0xFF==ord('d'): 
       break

capture.release()
cv.destroyAllWindows()
