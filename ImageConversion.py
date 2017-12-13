import base64


class Image:
    """This is the main calling class.

	__init__ sets the input_image.

    """

    # make default image a generic image to know bad?
    def __init__(self, input_image=" "):
        """ .. function:: __init__(self, input_image=" "

        :param image: specifies the input image file
        """
        # test if in 64; if not, convert to 64
        self.__image = input_image

    # this function should just return image in 64
    def bin_to_64(self):
	""" .. function:: bin_to_64(self)

	Returns binary image as base 64.
	"""
        return base64.b64encode(base64.b64decode(self.__image))


    def bin_from_64(self):
	""" .. function:: bin_from_64

	Returns base 64 image as binary.
	"""
        return base64.b64decode(self.__image)
