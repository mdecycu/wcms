# pip install waitress
from waitress import serve

from cmsimde import flaskapp

# run cmsimde dynamic site with production waitress
serve(flaskapp.app, host='127.0.0.1', port=5006, url_scheme='https', threads=16)