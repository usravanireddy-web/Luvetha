from fastapi import FastAPI, Form
from db import save_contact_form
from twilio.rest import Client
import uvicorn

app = FastAPI()

# Twilio credentials (get these from your Twilio Console)
ACCOUNT_SID = os.getenv("GEMINI_API_KEY")
AUTH_TOKEN = os.getenv("GEMINI_API_SECRET")
TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER") # Twilio sandbox number
ADMIN_WHATSAPP_NUMBER = os.getenv("ADMIN_WHATSAPP_NUMBER") # Your WhatsApp number

def send_whatsapp_notification(name, email, contact_no, message):
    client = Client(ACCOUNT_SID, AUTH_TOKEN)
    msg_body = f"📩 New Contact Form Submission:\n\n👤 Name: {name}\n📧 Email: {email}\n📞 Contact: {contact_no}\n💬 Message: {message}"
    client.messages.create(
        from_=TWILIO_WHATSAPP_NUMBER,
        body=msg_body,
        to=ADMIN_WHATSAPP_NUMBER
    )
    print("✅ WhatsApp notification sent to admin.")


@app.post("/contact")
def contact(
    name: str = Form(...),
    email: str = Form(...),
    contact_no: str = Form(...),
    message: str = Form(...)
):
    # 1️⃣ Save to database
    save_contact_form(name, email, contact_no, message)
    
    # 2️⃣ Send WhatsApp notification
    send_whatsapp_notification(name, email, contact_no, message)
    
    return {"status": "success", "message": "Thank you for contacting us!"}

if __name__ == "__main__":
    
    uvicorn.run(app, host="localhost", port=5000)