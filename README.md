# Serverless framework boilerplate
Serverless boilerplate for a serverless service with babel, eslint, validate-commit-msg, ghooks, mocha, travis, serverless-offline, and general scripts.

## Pull down into new project folder
`
git clone https://github.com/supercycle91/serverless-boilerplate.git [new file name]
`

## Rename Project

### serverless.yml
`
service: [enter new service name here]
`

### package.json
`
{
	"name": "[enter new service name here as well]",
}
`
## Install

### Delete package-lock.json
`
rm -rf package-lock.json
`

## Install dependencies
`
npm install
`

## Remove .git and initialize new git repo
`
rm -rf .git && git init
`

## Add new git remote url
`
git remote add origin [new url]
`



