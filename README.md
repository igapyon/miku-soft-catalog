# mikuproject-skills-java

## English

`mikuproject-skills-java` is a set of skills for creating and revising WBS plans with `mikuproject-java`.

What users should care about first:

- you can start by saying `mikuproject`
- you can create a WBS through conversation
- you can revise and update an existing plan
- you can export results as `XLSX`, `Markdown`, `SVG`, and other useful formats
- when needed, you can also handle plan data in forms that are easy to save, reuse, and hand off

At the moment, the main skill in this repository is [`skills/mikuproject-java`](./skills/mikuproject-java).

Runtime requirement:

- Java is required to run the `mikuproject-java` CLI used by this skill

## Quick Start

1. Prepare the `mikuproject-java` runtime in the expected location or bundle form.
2. Verify the repository according to the current development rules.
3. Open [`skills/mikuproject-java`](./skills/mikuproject-java) or install the generated bundle into your skill home.
4. In conversation, start with a prompt such as `mikuproject, create a WBS for ...`.

Typical things you can ask for:

- create a new WBS from requirements or constraints
- revise an existing WBS
- export the current result as `XLSX`
- export the current result as `Markdown`
- export the current result as daily or weekly `SVG`

## Notes

- This repository does not aim to replace the `mikuproject` browser UI.
- For advanced workflows, the skill can also work with structured plan data such as workbook JSON.
- If you are evaluating or developing the repository itself, see the documents under [`docs/`](./docs/).

Developer-oriented entry points:

- [`docs/quickstart.md`](./docs/quickstart.md)
- [`docs/development.md`](./docs/development.md)
- [`docs/runtime-java-cli.md`](./docs/runtime-java-cli.md)
- [`docs/compatibility.md`](./docs/compatibility.md)
- [`docs/upstream-policy.md`](./docs/upstream-policy.md)

## License

This project is licensed under the Apache License 2.0. See [`LICENSE`](./LICENSE).

---

## 日本語

`mikuproject-skills-java` は、`mikuproject-java` を使って WBS を作成・修正できる skill 集です。

まずユーザーにとって重要なのは次の点です。

- `mikuproject` と言って使い始められること
- 対話から WBS を作成できること
- 既存の計画を修正・更新できること
- `XLSX`、`Markdown`、`SVG` などの形で出力できること
- 必要に応じて、計画データを保存・再利用・受け渡ししやすい形でも扱えること

現在、このリポジトリの中心となる skill は [`skills/mikuproject-java`](./skills/mikuproject-java) です。

実行前提:

- この skill が利用する `mikuproject-java` CLI の実行には Java が必要です

## はじめかた

1. 想定する場所または bundle 形式で `mikuproject-java` runtime を用意します。
2. 現時点の開発ルールに沿ってリポジトリの状態を確認します。
3. [`skills/mikuproject-java`](./skills/mikuproject-java) を参照するか、生成された bundle を skill home に配置します。
4. 会話では、たとえば `mikuproject で WBS を作って` のように始めます。

よくある使い方:

- 要件や制約から新しい WBS を作る
- 既存の WBS を修正する
- 現在の結果を `XLSX` として出力する
- 現在の結果を `Markdown` として出力する
- 現在の結果を日次または週次の `SVG` として出力する

## 補足

- このリポジトリは `mikuproject` のブラウザ UI を置き換えることを目的にはしていません。
- より高度な運用では、workbook JSON などの構造化された計画データも扱えます。
- リポジトリ自体の評価や開発を行う場合は [`docs/`](./docs/) 以下の文書を参照してください。

開発者向けの入口:

- [`docs/quickstart.md`](./docs/quickstart.md)
- [`docs/development.md`](./docs/development.md)
- [`docs/runtime-java-cli.md`](./docs/runtime-java-cli.md)
- [`docs/compatibility.md`](./docs/compatibility.md)
- [`docs/upstream-policy.md`](./docs/upstream-policy.md)
