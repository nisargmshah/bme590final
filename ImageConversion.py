import base64


def convert_image_to_64(image):
    return base64.b64encode(base64.b64decode(image))
