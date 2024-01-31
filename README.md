# Sveriges Radio Player in React :radio:

Todays assignment is to use the Sveriges Radio API to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player!

## How to complete this assignment

Before you go any further, take a moment to look at an example API response from Sveriges Radio. Here you can find a list of all 55 stations, and a url to each station's live stream: https://api.sr.se/api/v2/channels?format=json&size=100

Your task is to use `fetch()` to get this JSON from the Sveriges Radio API and render a list of channels with playable streams on your page. You should use at least the station name, image, and colour keys in the JSON to create a layout which looks something like this:

![Wireframe](https://github.com/davidshore/chas_radioplayer/raw/main/wireframe.png)

### Set up project

1. Open a terminal and `cd` to where you want to create the project.
2. Type `npm create vite@latest radio-player-react -- --template react`
3. Type `cd radio-player-react` and then `npm install`

### React Components

As always, start by thinking of how to divide your page into React components. You will probably want some sort of `Station` component at the very least. Try to draw out your plan on paper to get it clear in your mind.

### API Key.

The Sveriges Radio API seems to work without any sort of authentication, so that's one less thing to worry about! :)

### Audio

Check out the [documentation](https://www.w3schools.com/tags/tag_audio.asp) for the `<audio>` tag. The format for the stream is mp3, so you'll need to use a `<source>` with the "type" of "audio/mpeg". Don't worry if there is no sound playing. It seems to happen sometimes with this api.

### Zero data

Design for zero data. Make your page look nice while the station list is loading by creating a "skeleton loader". Consider using the Chrome [network throttler](https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions) to simulate a slow connection and make it easier to test your code.
Use this library to include a skeleton loader in your project:
[https://github.com/dvtng/react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton).

### Filter

The task is to implement a search function which calls .filter() on the station list to decide which channels to render.

You will need use the onChange attribute on an input to invoke a function which will use the input's value in the .filter() call to filter the stations. If you want the search to be more flexible, look into using regular expressions from the input value!
