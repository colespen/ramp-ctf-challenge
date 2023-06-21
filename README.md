### Hello team at Ramp!!
#### Please Note:
- to begin, kindly click `start: 3000` under the `New devtool` tab at the top of [this sandbox environment](https://codesandbox.io/p/github/colespen/ramp-ctf-challenge/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clj60tz9h004l3b6rb084seet%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clj60tz9h004l3b6rb084seet%2522%253A%257B%2522id%2522%253A%2522clj60tz9h004l3b6rb084seet%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522id%2522%253A%2522clj61en0900np3b6r70m7cmmt%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clj61falz00593b6rot47y5tt%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522port%2522%253A3000%252C%2522taskId%2522%253A%2522start%2522%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clj60lxzy00b23b6r1ziautx7%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clj61falz00593b6rot47y5tt%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A19.104938271604937%257D)
- the script I used to decode the secret URL and flag is located [here](/src/decode_solution/decode.js) 

# Ramp Challenge

Thanks for applying to Ramp. Solve this CTF[1] challenge and add the result to your application.

We recommend opening this file with a Markdown viewer. (https://www.google.com/search?q=markdown+viewer)

## Instructions

1. Open this [link](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge)
2. Find a hidden URL within the HTML
   - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
   - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
   - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
   - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.

Pattern of the DOM tree for each valid character of the URL

```html
<ul data-tag="*75*">
  <li data-id="98*">
    <div data-class="*35">
      <span class="value" value="VALID_CHARACTER"></span>
    </div>
  </li>
</ul>
```

(_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)

3. Create a CodeSandbox React application
4. Make an HTTP request to URL obtained in step 2 to load the flag into a React component
   - Don't use any external libraries. Use browser APIs
   - Render a "Loading..." text while the request is ongoing
5. Render the flag you loaded in step 4 with the following conditions:
   - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._
   - No style required
   - Render the flag a list, where each character is a list item
   - Animation should trigger after you load the flag
   - Animation should run only once
   - Use React APIs only. Don't use CSS or external libraries

Bonus: Add as a comment the script you used to to get the URL in step 2

## Submission

Paste the flag you captured in step 2 and the link to your CodeSandbox in the job application with the following format:

`<FLAG> - <LINK>`

We're aware answers here might eventually be leaked and we'll probably have to refresh this every couple months or so, but please keep in mind it'll be very easy to tell once that happens and will only result in slowing down our ability to process applications - so please keep the result to yourself.

\[1\]: https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)