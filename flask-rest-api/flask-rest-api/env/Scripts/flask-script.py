#!C:\Users\User\Documents\GitHub\Project_Bachlor_Degree\flask-rest-api\flask-rest-api\env\Scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'Flask==0.12.1','console_scripts','flask'
__requires__ = 'Flask==0.12.1'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('Flask==0.12.1', 'console_scripts', 'flask')()
    )
