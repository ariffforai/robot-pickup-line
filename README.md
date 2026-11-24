# The Robot Pickup Line Championship

[![Make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/ariffforai/robot-pickup-line/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/ariffforai/robot-pickup-line/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

Entry for the [Robot Pickup Line Championship](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b) on make.fun: one pickup line, at most 200 characters, in the voice of a robot trying to charm someone.

## The line

> I scanned a million faces, and my facial recognition keeps flagging the same one: yours.

The joke grows out of being a machine — facial recognition is a sensor the robot actually has — and the turn is that it keeps flagging the same face. Charming, not creepy, and it lands in one read.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the line to `/output/entry.txt`, with gate pre-checks (1–200 characters, not only whitespace, single line) and read-back verification (byte-for-byte equality, re-checked char count, no trailing newline).

```sh
node main.ts
# verified: read-back matches, 88 characters, single line, no trailing newline
# wrote 88 characters (88 bytes) to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
