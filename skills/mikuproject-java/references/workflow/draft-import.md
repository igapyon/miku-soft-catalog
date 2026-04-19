# Draft Import

初期仕様では、新規 WBS 作成は draft 系の内部表現から開始し、最終的に `XML` または `workbook JSON` に着地させる想定です。

会話上の役割は既存 `mikuproject-skills` と揃える方針です。

## 役割

- 新規 WBS 作成では `project_draft_view` を使う
- `project_draft_view` は中間表現であり、通常はユーザーへそのまま見せない
- 生成後は `import-ai-json` で `XML` に取り込む
- その後の正本は `XML` または `workbook JSON` として扱う

## 完了条件

新規作成フローは、`project_draft_view` を作った時点では未完了です。
少なくとも次まで進めます。

1. `project_draft_view` を内部で作成する
2. 必要なら一時 JSON ファイルへ保存する
3. `import-ai-json` を実行する
4. `XML` または `workbook JSON` を次の処理へ渡す

visible handoff で止めないことを優先します。

## 最小の考え方

`project_draft_view` では少なくとも次を明示します。

- `view_type`
- project の識別情報。最低でも `name`
- task の配列
- 各 task の `uid`
- 各 task の `name`
- 依存がある task では `predecessor_uids` または `predecessors[].task_uid`

トップレベルの `dependencies` へ依存関係をまとめて置く運用は避けます。
依存関係は task 側へ持たせます。

## 最小例

最小の成功例としては、少なくとも次のような形を想定します。

```json
{
  "view_type": "project_draft_view",
  "project": {
    "name": "京都2泊3日旅行"
  },
  "tasks": [
    {
      "uid": "t1",
      "name": "旅行条件を整理する"
    },
    {
      "uid": "t2",
      "name": "宿を予約する",
      "predecessor_uids": ["t1"]
    }
  ]
}
```

この JSON は、そのまま `import-ai-json` の入力候補になります。

```bash
java -jar bundle/mikuproject-skills-java/skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar import-ai-json mikuproject/state/draft.json mikuproject/state/output.xml
```

## 依存関係付きの例

依存関係を明示する場合は、各 task に前提タスクを持たせます。

```json
{
  "view_type": "project_draft_view",
  "project": {
    "name": "京都2泊3日旅行"
  },
  "tasks": [
    {
      "uid": "prep-1",
      "name": "旅行日程を決める"
    },
    {
      "uid": "prep-2",
      "name": "新幹線を予約する",
      "predecessor_uids": ["prep-1"]
    },
    {
      "uid": "prep-3",
      "name": "宿を予約する",
      "predecessors": [
        {
          "task_uid": "prep-1"
        }
      ]
    },
    {
      "uid": "trip-1",
      "name": "東京から京都へ移動する",
      "predecessor_uids": ["prep-2", "prep-3"]
    }
  ]
}
```

`predecessor_uids` と `predecessors[].task_uid` は、どちらか片方に寄せて使う方が読みやすいです。
混在は可能でも、1 つの draft では記法を揃える方を推奨します。

## 避けたい形

避けたいのは次です。

- `view_type` がない
- task ごとの `uid` がない
- 依存関係を top-level `dependencies` へだけ書く
- `project_draft_view` を作って終わりにする
- runtime が生きているのに visible handoff へ落とす

## 会話から draft への落とし方

会話要求から `project_draft_view` を作るときは、少なくとも次を整理します。

- project 名
- 大まかな phase
- task の粒度
- 依存関係
- 必要なら milestone

ただし、この段階では business 的な正しさを断定しません。
ここでの目的は、`mikuproject-java` に取り込める draft を安定して作ることです。
