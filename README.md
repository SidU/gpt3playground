# GPT-3 Intent playground demo NodeJS

This is just a late-night experimentation of trying to use GPT-3 to do some intent classification based off of Open AI pet name generator sample. It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Follow the instructions below to get set up.

To play with it in the browser, just [click here](https://6392e0b1a063340008498c67--coruscating-parfait-a09abd.netlify.app/).

<img width="568" alt="image" src="https://user-images.githubusercontent.com/4107912/207128572-0f3567de-407f-4713-8955-33b54d11d0ed.png">

To play with new prompts, it is faster to play with them on the [Open AI playground](https://beta.openai.com/playground).

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://beta.openai.com/docs/quickstart).
