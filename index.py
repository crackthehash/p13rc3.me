openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes -subj '/CN=localhost'

cat <<EOF > server.py
import http.server, ssl

server_address = ('', 8008)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket, certfile='./server.pem', server_side=True)
httpd.serve_forever()
EOF

python3 server.py
