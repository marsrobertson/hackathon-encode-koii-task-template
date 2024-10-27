# Independent Tribunal

Encode Hack London. KOII track. Using 90k blockchain nodes to ask humans: what do you think? Who is more right? Which option do you choose? Which option is better?

Platform to run a variety of DeSci (decentralised science) experiments, including subjective opinion polling, with built in $JUST incentives. 8 billion $JUST tokens, one for each human.

* Justice.
* Fairness.
* Independent Tribunal.

Multiple independent data points, coming from real humans.

We can resolve all the disputes and enable Global Peace 🕊️

![](https://i.imgur.com/RMx7rAD.png)

* https://marsrobertson.com/hack
* https://docs.google.com/presentation/d/1qP2fP8nOJUQwazY1nr9hAJidjgeBJaPyg96XwaQtqCc/edit?usp=sharing
* https://youtu.be/Ezq1JwyJ0IA
  
Full stack of KOII technologies. Node. Task template. CLI. IPFS nodes. KPL token creation. During the process we ironed out some kinks and provided valuable feedback to the core developers. T

✅ Deployed task on KOII.
✅ Used the KPL token.

Thank you for the ongoing help and support.

---

# Koii Task Template

## Development Guide

First time writing a task? Start with the [Development Guide](https://github.com/koii-network/ezsandbox).

## Task Flow

Tasks operate within a periodic structure known as 'rounds'. Each round consists of the following steps:

1. **Perform the Task:** Execute the necessary actions for the round.
2. **Audit Work:** Review the work completed by other nodes.
3. **Rewards and Penalties:** Distribute rewards and apply penalties as necessary.

For more detailed information about the task flow, refer to [the runtime flow documentation](https://docs.koii.network/concepts/what-are-tasks/what-are-tasks/gradual-consensus).

Looking to bring better structure to your task? Explore our [Task Organizer](https://www.figma.com/community/file/1220194939977550205/Task-Outline) for better organization.

## Tips

- Always ensure your secret files, such as `.env` files, are secure! Implement a robust `.gitignore` strategy.
- Continue innovating with Koii!

Should you encounter any issues, don't hesitate to reach out by opening a ticket on [Discord](https://discord.gg/koii-network).

## Environment Requirements

- [Node >=16.0.0](https://nodejs.org)
- [Docker Compose](https://docs.docker.com/get-started/08_using_compose/)

## Tool Requirements

- [Koii CLI Suite](https://docs.koii.network/develop/command-line-tool/koii-cli/install-cli)
- [Create Task CLI](https://docs.koii.network/develop/command-line-tool/create-task-cli/install)

## Available Scripts


Simulate rounds using simulateTask.js.

```sh
yarn test
```

Runs Jest unit tests.

```sh
yarn jest-test
```


Builds the project and generates the main script: `dist/main.js`.

```sh
yarn webpack
```

Runs the live debugger (must have the task running in the desktop node).

```sh
yarn prod-debug
```

## Runtime Options

There are two ways to run your task during development:

1. With `GLOBAL_TIMERS="true"` (refer to `.env.local.example`) - When this option is enabled, IPC calls are made by calculating the average time slots of all tasks running on your node.

2. With `GLOBAL_TIMERS="false"` - This option allows for manual calls to K2 and disables the automatic triggers for round management on K2. Transactions are only accepted during the correct time period. Instructions for manual calls can be found in [Manual K2 Calls](./Manual%20K2%20Calls.md).
