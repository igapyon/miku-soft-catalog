# miku-soft docs maintenance

このリポジトリの `docs/miku-soft-*.md` は、miku-soft の基本設計文書です。

これらの文書を追加・更新・差し替えする場合は、Codex で `igapyon-miku-soft-developer` スキルを明示的に使用してください。

## 対象文書

- `miku-soft-00-overview-design-v20260427.md`
- `miku-soft-10-mainapp-design-v20260506.md`
- `miku-soft-20-javaapp-design-v20260506.md`
- `miku-soft-30-straight-conversion-v20260506.md`
- `miku-soft-40-agentskills-design-v20260506.md`
- `miku-soft-50-mcp-design-v20260506.md`

## 更新方針

- `igapyon-miku-soft-developer` スキルに同梱されている最新の `miku-soft-basic/` 文書を参照します。
- 同じ番号の文書に新しい `v2026...` 版がある場合は、内容と差分を確認してから更新します。
- ファイル名は原則としてスキル同梱の基本設計文書名をそのまま使います。
- 古い版を削除するか残すかは、差分と利用状況を確認して判断します。
- 更新後は `README.md` や関連するカタログ説明に影響がないか確認します。

## Codex への依頼例

```text
miku-soft-developerスキルを使って、docs配下のmiku-soft基本設計文書を最新化して。
```
