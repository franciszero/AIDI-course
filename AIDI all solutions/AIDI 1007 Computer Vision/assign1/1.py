from numpy.ma.core import true_divide
import cv2


def draw(event, x, y, flags, param):
    global point, crop
    if event == cv2.EVENT_LBUTTONDOWN:
        point = [(x, y)]
        crop = true_divide
    elif event == cv2.EVENT_LBUTTONUP:
        point.append((x, y))
        crop = False
        cv2.rectangle(img, point[0], point[1], (0, 0, 255), 2)
        cv2.imshow("img", img)


point = []
crop = False
img = cv2.imread('butterfly.jpg', cv2.IMREAD_UNCHANGED)
img_copy = img.copy()
cv2.namedWindow("img")
cv2.setMouseCallback("img", draw)
while True:
    cv2.imshow("img", img)
    key = cv2.waitKey(1) & 0xFF
    if key == ord("r"):
        img = img_copy.copy()
    elif key == ord("c"):
        break
if len(point) == 2:
    img_with_draw = img_copy[point[0][1]:point[1][1], point[0][0]:point[1][0]]
    cv2.imshow("img_with_draw", img_with_draw)
    cv2.waitKey(0)
cv2.destroyAllWindows()
