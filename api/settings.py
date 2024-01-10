import os

from django.conf import settings

# Set DEBUG mode
settings.DEBUG = True

# Set SECRET_KEY
settings.SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")

# Add other necessary settings for the "api" app
# ...
