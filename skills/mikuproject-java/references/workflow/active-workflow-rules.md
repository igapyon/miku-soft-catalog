# Active Workflow Rules

- 新規作成と既存修正を混同しない
- 新規作成では draft 系の流れを優先する
- 既存修正では `patch JSON` を優先する
- 途中 JSON は可能な限り内部状態として扱う
- 差分は runtime に閉じ込め、会話語彙は既存 Node 版に寄せる
