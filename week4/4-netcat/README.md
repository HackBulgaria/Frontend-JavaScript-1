# Testing HTTP Calls with netcat

We are going to start by making differt HTTP calls to our custom HTTP server.

For the HTTP server, we are going to use a simple utility program, called `netcat`

To check if you have `netcat`, run the following command:

```
$ which nc
OR
$ which netcat
```

You should have one of the two (Or maybe both) programs installed.

If you are running Windows, you can try using this - http://joncraton.org/blog/46/netcat-for-windows/ (At your own risk)

## Start a netcat server (1)

Type the following command:

```
$ nc -l 8080
```

This will open a TCP socket on port `8080`

## Open via localhost

Now, head to your browser and open `http://localhost:8080`

Open the shell running the `nc -l 8080` command and copy the output somewhere (In Sublime, for example)

## Make an HTTP request via curl

Now, run your netcat server again `(1)`.

Open another shell and run the following command:

```
$ curl http://localhost:8080
```

`curl` is a command-line HTTP client that can make HTTP requests.

Again, copy the output.


## Make HTTP request via $.ajax()

Now, we are going to make an HTTP call using jQuery's [`$.ajax()`](http://api.jquery.com/jquery.ajax/)

In a website with jQuery loaded, open the console and type the following:

```javascript
$.ajax({
    url: "http://localhost:8080"
})
```

Again, copy the output from the `nc` command

## What is the difference between the different outputs?

From `$.ajax()` we get:

```
GET / HTTP/1.1
Host: localhost:8080
Connection: keep-alive
Accept: */*
Origin: http://api.jquery.com
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: http://api.jquery.com/jquery.ajax/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: bg-BG,bg;q=0.8,en;q=0.6
```

From `curl` we get:

```
GET / HTTP/1.1
User-Agent: curl/7.22.0 (x86_64-pc-linux-gnu) libcurl/7.22.0 OpenSSL/1.0.1 zlib/1.2.3.4 libidn/1.23 librtmp/2.3
Host: localhost:8080
Accept: */*
```

From opening `http://localhost:8080` in browser, we get:

```
GET / HTTP/1.1
Host: localhost:8080
Connection: keep-alive
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Accept-Encoding: gzip,deflate,sdch
Accept-Language: bg-BG,bg;q=0.8,en;q=0.6
```

They are all GET HTTP requests. `$.ajax()` is just making the request asynchronous while the other two methods wait for the response.
