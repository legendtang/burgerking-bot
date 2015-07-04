# burgerking-bot

A bot for auto complete the survey from burgerking.

##Deploy within one minute

###Heroku

Deployment to heroku is a bit more complicated than OpenShift, but still easier than any other VPS.

1. Fork this repo
2. Create an application in **Heroku Dashboard**, you will be redirected to **Settings** of your newly created application.
3. Find **Config Variables** in **Settings** segment, click **Reveal Config Vars**, then press **Edit**
4. Add a new variable, the **key** is ````BUILDPACK_URL````, and the **value** is ````https://github.com/heroku/heroku-buildpack-multi````, click **Save**.
5. Find **Connect to Github** in **Deploy** segment, gives Heroku your Github access, then type **the repo name that you've forked**, click **Connect**.
6. Find **Manual deploy**, click **Deploy Branch**.
7. Enjoy!
