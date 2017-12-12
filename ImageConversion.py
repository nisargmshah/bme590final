import base64


class Image:
    """

    """

    # make default image a generic image to know bad?
    def __init__(self, input_image=" "):
        """

        :param image:
        """
        # test if in 64; if not, convert to 64
        self.__image = input_image

    # this function should just return image in 64
    def bin_to_64(self):
        return base64.b64encode(base64.b64decode(self.__image))


    def bin_from_64(self):
        return base64.b64decode(self.__image)
