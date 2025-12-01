# Get Started

1. First install poetry

- `pip install pipx`
- `pipx install poetry`

2. Install dependencies from the poetry lock file

- `poetry install`

3. Then, go into py-backend/ and run

- `poetry run fastapi dev src/main.py`

# To make vscode play nice

Set your interpretor to use the poetry environment

1. First run `poetry env info --path`

- That will get you a path where your poetry environment is

2. Then click on the command pallete via the gear icon in the bottom left of the screen

3. Type "Python: Select Interpreter" and paste your env path _plus_ /bin/python at the end, so it should look like this:

/Users/alexpinto/Library/Caches/pypoetry/virtualenvs/py-backend-RVjEZLhN-py3.12/bin/python

# Make changes in the sdk

1. Create a new api route in src/routes
2. Import the route so that it is available in src/main.py and add it to app
3. Un-comment the commented out code in main.py to make the openapi schema in ts/sdk
4. Go into ts/sdk and run `npx orval` to generate the hooks
