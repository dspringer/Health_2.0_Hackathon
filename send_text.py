from bottle import route, run, template, request
from threading import Timer
from twilio.rest import TwilioRestClient
import json

#@route('/')
#def index():

@route('/healthboard')
def healthboard():
    client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN)
    client.messages.create(
                to="YOUR NUMBER",
                from_="YOUR NAME",
                body="You are showing critical signs of hypertension. Please call me back at 555-555-5555",
        )
    return "yeah2"
    #the host has to match the host o_o   

# put your own credentials here 
ACCOUNT_SID = "YOUR ACCOUNT_SID"
AUTH_TOKEN = "YOUR AUTH_TOKEN"

# For Nitrous
run(host='0.0.0.0', port=8080)

