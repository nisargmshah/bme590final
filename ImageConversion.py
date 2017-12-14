import base64


class Image:
    """
    This class takes in a base64 string representation of an image and
    gives the user the ability to return it in base64 and binary form.
    Note: Input to this class must be string; otherwise, will raise a TypeError
    """

    # make default image a generic image to know bad?
    def __init__(self, input_image, thefilename):
        """
        :param input_image: base64 string representation of an image
        """
        if isinstance(input_image, str) is False:
            raise TypeError('input must be a string')
        # ideally would better test for base64 (do some later in this init)
        # could decode and re-encode, but that is working for all strings

        self.__image = input_image
        self.__filename = thefilename

        try:
            self.print2()
        except ValueError:
            raise ValueError("Input not in base64, or incorrectly padded")

        # self.save_image_string(file=self.__filename)
        # self.__image = self.encode_image_string(file=self.__filename)

    def encode_image_string(self, file="example.jpg"):
        with open(file, "rb") as image_file:
            return base64.b64encode(image_file.read())

    def save_image_string(self, file="example.jpg"):
        with open(self.__filename, "wb") as image_out:
            image_out.write(base64.b64decode(file))

    def print64(self):
        return self.__image

    def print2(self):
        return base64.b64decode(self.__image)
