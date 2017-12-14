import base64


def encode_image_string(filename):
    with open(filename, "rb") as image_file:
        image_string = base64.b64encode(image_file.read())
        return image_string


def save_image_string(base64image, filename):
    with open(filename, "wb") as image_out:
        image_out.write(base64.b64decode(base64image))


if __name__ == '__main__':
    encoded_image = encode_image_string("example.jpg")
    print(encoded_image)
    save_image_string(encoded_image, "example_new.jpg")
