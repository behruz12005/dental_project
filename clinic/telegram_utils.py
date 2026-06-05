import requests
from django.conf import settings


def send_contact_to_telegram(contact):
    token = settings.TELEGRAM_BOT_TOKEN
    chat_id = settings.TELEGRAM_CHAT_ID

    text = f"""
🦷 <b>Yangi qabul so‘rovi</b>

👤 <b>Ism:</b> {contact.name}
📞 <b>Telefon:</b> {contact.phone}
💬 <b>Xabar:</b> {contact.message or "Yozilmagan"}

🆔 <b>ID:</b> {contact.id}
"""

    keyboard = {
        "inline_keyboard": [
            [
                {
                    "text": "✅ Tekshirildi",
                    "callback_data": f"checked:{contact.id}",
                }
            ]
        ]
    }

    url = f"https://api.telegram.org/bot{token}/sendMessage"

    try:
        response = requests.post(
            url,
            json={
                "chat_id": chat_id,
                "text": text,
                "parse_mode": "HTML",
                "reply_markup": keyboard,
            },
            timeout=10,
        )

        print("Telegram send:", response.status_code, response.text)
        return response.status_code == 200

    except Exception as e:
        print("Telegram yuborish xatosi:", e)
        return False