import http.server
import socketserver
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(('', 8087), handler)
print('Serving CockpitPSE on port 8087')
httpd.serve_forever()
