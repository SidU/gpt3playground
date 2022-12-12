import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userPrompt: userPrompt }),
    });
    const data = await response.json();
    setResult(data.result);
    setUserPrompt("");
  }

  return (
    <div>
      <Head>
        <title>Sid Uppal's Hackery</title>
        <link rel="icon" href="/robot.png" />
      </Head>

      <main className={styles.main}>
        <img src="/robot.png" className={styles.headerimage} />
        <h3>GPT-3 App Intent test</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="userPrompt"
            placeholder="Enter your prompt"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
          />
          <input type="submit" value="Process" />
        </form>
        <div className={styles.result}>{result}</div>
        <span>(c) Sid Uppal Industries Ltd.</span>
      </main>
    </div>
  );
}
