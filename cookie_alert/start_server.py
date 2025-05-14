import http.server
import socketserver

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler
Handler.directory = '.'

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
