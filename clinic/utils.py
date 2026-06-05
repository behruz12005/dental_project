import requests
from django.conf import settings


def send_contact_request_to_telegram(contact):
    bot_token = settings.TELEGRAM_BOT_TOKEN
    chat_id = settings.TELEGRAM_CHAT_ID

    text = f"""
🦷 <b>Yangi qabul so‘rovi</b>

👤 <b>Ism:</b> {contact.name}
📞 <b>Telefon:</b> {contact.phone}
💬 <b>Xabar:</b> {contact.message or "Yozilmagan"}

📌 <b>Status:</b> {contact.get_status_display()}
✅ <b>Tekshirildi:</b> {"Ha" if contact.is_checked else "Yo‘q"}
🆔 <b>ID:</b> {contact.id}
"""

    keyboard = {
        "inline_keyboard": [
            [
                {
                    "text": "✅ Tekshirildi",
                    "callback_data": f"checked:{contact.id}"
                }
            ],
            [
                {
                    "text": "📞 Qo‘ng‘iroq qilindi",
                    "callback_data": f"called:{contact.id}"
                },
                {
                    "text": "❌ Javob bermadi",
                    "callback_data": f"not_answered:{contact.id}"
                }
            ],
            [
                {
                    "text": "🗓 Qabulga yozildi",
                    "callback_data": f"booked:{contact.id}"
                }
            ]
        ]
    }

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"

    try:
        response = requests.post(
            url,
            json={
                "chat_id": chat_id,
                "text": text,
                "parse_mode": "HTML",
                "reply_markup": keyboard,
            },
            timeout=8,
        )

        print("Telegram send response:", response.status_code, response.text)
        return response.status_code == 200

    except Exception as e:
        print("Telegram yuborishda xatolik:", e)
        return False