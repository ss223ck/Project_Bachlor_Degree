from setuptools import setup

setup(
    name='flask_rest_api',
    version='1.0',
    packages=['flask_rest_api' ],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'flask',
        'flask-restful',
        'flask-sqlalchemy',
        'SQLAlchemy>=1.1.9'
    ],
)