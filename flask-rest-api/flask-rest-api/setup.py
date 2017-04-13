from setuptools import setup

setup(
    name='flask_rest_api',
    version='1.0',
    description='Simple flask rest-api',
    url='https://github.com/ss223ck/rest-applications/',
    author='Sverker Soderlund',
    author_email='none',
    packages=['flask_rest_api' ],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'flask',
        'flask-restful',
        'flask-sqlalchemy',
        'SQLAlchemy>=1.1.9',
        'pymysql'
    ],
)