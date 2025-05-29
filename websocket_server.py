# websocket_server.py
import asyncio
import websockets
import json

clients = set()

async def handler(ws):
    clients.add(ws)
    try:
        async for message in ws:
            for client in clients:
                if client != ws:
                    await client.send(message)
    except:
        pass
    finally:
        clients.remove(ws)

async def main():
    async with websockets.serve(handler, "0.0.0.0", 8080):
        await asyncio.Future()  # run forever

asyncio.run(main())
