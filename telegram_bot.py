import os
import time
import requests
from dotenv import load_dotenv

load_dotenv(override=True)

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
SITE_API_URL = os.getenv("SITE_API_URL", "http://127.0.0.1:8000")
SECRET_KEY = os.getenv("TELEGRAM_SECRET_KEY", "")


GET_UPDATES_URL = f"https://api.telegram.org/bot{BOT_TOKEN}/getUpdates"
ANSWER_CALLBACK_URL = f"https://api.telegram.org/bot{BOT_TOKEN}/answerCallbackQuery"
EDIT_MESSAGE_TEXT_URL = f"https://api.telegram.org/bot{BOT_TOKEN}/editMessageText"


def post_checked_to_django(contact_id):
    url = f"{SITE_API_URL}/api/contact/{contact_id}/checked/"

    try:
        response = requests.post(
            url,
            data={
                "secret": SECRET_KEY,
            },
            timeout=10,
        )

        print("Django API:", response.status_code, response.text)
        return response.status_code == 200

    except Exception as e:
        print("Django API xatosi:", e)
        return False


def answer_callback(callback_id, text):
    try:
        requests.post(
            ANSWER_CALLBACK_URL,
            json={
                "callback_query_id": callback_id,
                "text": text,
                "show_alert": False,
            },
            timeout=10,
        )
    except Exception as e:
        print("answerCallbackQuery xatosi:", e)


def edit_checked_message(chat_id, message_id, old_text):
    if "✅ Tekshirildi" in old_text:
        new_text = old_text
    else:
        new_text = old_text + "\n\n✅ Tekshirildi"

    try:
        response = requests.post(
            EDIT_MESSAGE_TEXT_URL,
            json={
                "chat_id": chat_id,
                "message_id": message_id,
                "text": new_text,
                "parse_mode": "HTML",

                # Buttonni olib tashlaydi
                "reply_markup": {
                    "inline_keyboard": []
                },
            },
            timeout=10,
        )

        print("Telegram edit:", response.status_code, response.text)
        return response.status_code == 200

    except Exception as e:
        print("editMessageText xatosi:", e)
        return False


def run_bot():
    print("Telegram bot eshitishni boshladi...")

    offset = None

    while True:
        try:
            params = {
                "timeout": 30,
            }

            if offset is not None:
                params["offset"] = offset

            response = requests.get(
                GET_UPDATES_URL,
                params=params,
                timeout=40,
            )

            data = response.json()

            if not data.get("ok"):
                print("Telegram getUpdates xato:", data)
                time.sleep(3)
                continue

            updates = data.get("result", [])

            for update in updates:
                offset = update["update_id"] + 1

                callback = update.get("callback_query")
                if not callback:
                    continue

                callback_id = callback.get("id")
                callback_data = callback.get("data", "")

                message = callback.get("message", {})
                chat = message.get("chat", {})

                chat_id = chat.get("id")
                message_id = message.get("message_id")
                old_text = message.get("text", "")

                print("Callback:", callback_data)

                if callback_data.startswith("checked:"):
                    contact_id = callback_data.split(":")[1]

                    ok = post_checked_to_django(contact_id)

                    if ok:
                        edit_checked_message(chat_id, message_id, old_text)
                        answer_callback(callback_id, "✅ Tekshirildi qilib belgilandi")
                    else:
                        answer_callback(callback_id, "❌ Database yangilanmadi")

        except KeyboardInterrupt:
            print("Bot to‘xtatildi")
            break

        except Exception as e:
            print("Bot umumiy xato:", e)
            time.sleep(3)


if __name__ == "__main__":
    run_bot()
