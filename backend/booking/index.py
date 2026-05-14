"""
Управление бронированием столиков: проверка доступности, создание и получение броней.
Хранение in-memory — данные сбрасываются при перезапуске сервера.
"""

import json
import random
import string
from datetime import datetime

# In-memory хранилище бронирований
# Структура: {(table_id, date, start_time, end_time): {booking_data}}
_bookings = {}


def _generate_cancel_code():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))


def _times_overlap(start1, end1, start2, end2):
    """Проверяет пересечение двух временных интервалов."""
    return start1 < end2 and end1 > start2


def _is_table_busy(table_id, date, start_time, end_time):
    """Проверяет, занят ли столик в указанное время."""
    for key, booking in _bookings.items():
        if booking['table_id'] == table_id and booking['date'] == date:
            if _times_overlap(start_time, end_time, booking['start_time'], booking['end_time']):
                return True
    return False


def _get_busy_tables(date, start_time, end_time):
    """Возвращает список занятых столиков на указанную дату и время."""
    busy = set()
    for booking in _bookings.values():
        if booking['date'] == date:
            if _times_overlap(start_time, end_time, booking['start_time'], booking['end_time']):
                busy.add(booking['table_id'])
    return list(busy)


def handler(event: dict, context) -> dict:
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    method = event.get('httpMethod', 'GET')
    path = event.get('path', '/')
    params = event.get('queryStringParameters') or {}

    # GET /busy — получить занятые столики для даты и времени
    if method == 'GET' and '/busy' in path:
        date = params.get('date', '')
        start_time = params.get('start_time', '')
        end_time = params.get('end_time', '')

        if not date or not start_time or not end_time:
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'date, start_time, end_time обязательны'})
            }

        busy_tables = _get_busy_tables(date, start_time, end_time)
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'busy_tables': busy_tables})
        }

    # POST / — создать бронирование
    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        table_id = body.get('table_id')
        date = body.get('date')
        start_time = body.get('start_time')
        end_time = body.get('end_time')
        name = body.get('name', '')
        phone = body.get('phone', '')
        guests = body.get('guests', 1)
        pre_order = body.get('pre_order', {})

        if not all([table_id, date, start_time, end_time, name, phone]):
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Заполните все обязательные поля'})
            }

        if _is_table_busy(table_id, date, start_time, end_time):
            return {
                'statusCode': 409,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Этот столик уже занят на выбранное время. Пожалуйста, выберите другой столик или время.'})
            }

        cancel_code = _generate_cancel_code()
        booking_id = f"{table_id}_{date}_{start_time}_{cancel_code}"

        _bookings[booking_id] = {
            'id': booking_id,
            'table_id': table_id,
            'date': date,
            'start_time': start_time,
            'end_time': end_time,
            'name': name,
            'phone': phone,
            'guests': guests,
            'pre_order': pre_order,
            'cancel_code': cancel_code,
            'created_at': datetime.now().isoformat()
        }

        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'success': True, 'cancel_code': cancel_code, 'booking_id': booking_id})
        }

    # DELETE / — отмена бронирования по коду
    if method == 'DELETE':
        body = json.loads(event.get('body') or '{}')
        cancel_code = body.get('cancel_code', '').strip().upper()

        if not cancel_code:
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Введите код отмены'})
            }

        found_key = None
        for key, booking in _bookings.items():
            if booking['cancel_code'] == cancel_code:
                found_key = key
                break

        if not found_key:
            return {
                'statusCode': 404,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Бронирование с таким кодом не найдено'})
            }

        cancelled = _bookings.pop(found_key)
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'success': True, 'message': f"Бронирование столика #{cancelled['table_id']} отменено"})
        }

    return {
        'statusCode': 404,
        'headers': cors_headers,
        'body': json.dumps({'error': 'Маршрут не найден'})
    }
