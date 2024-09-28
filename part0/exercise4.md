# 0.4: New note diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Enter note text into input box and press save
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server->>browser: 302 HTTP code, perform a new GET to the address in headers' Location

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: HTML document

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: the css file

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: the JavaScript file

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: [{note_1}, {note_2}, ..., {note_i} ]

    Note right of browser: The browser executes the callback function that renders the notes
```