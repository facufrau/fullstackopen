# 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Enter note text into input box and press save
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa containing a json with the note data.
    server->>browser: 201 HTTP code created


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    server-->>browser: [{note_1}, {note_2}, ..., {note_i} ]
    Note right of browser: The browser executes the callback function that renders the notes
```