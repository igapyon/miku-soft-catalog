# Upstream Policy

- `mikuproject-skills-java` は `mikuproject-skills` を `git subtree` や `git submodule` で内包しない
- `mikuproject-skills` は実装の同梱対象ではなく、互換性を確認するための upstream 参照先として扱う
- upstream 参照が必要なときは、この repo に upstream remote を追加して `git fetch` で比較する
- 日常運用では、この repo 単体で意味が通る状態を保つ
- 利用者に upstream repo の存在を前提とした導線を要求しない
- 会話仕様や workflow 語彙は、必要なものだけをこの repo 側へ明示的に取り込む
- upstream 追従は自動同期ではなく、差分レビュー付きの手動追従を基本とする
- runtime、bundle、依存解決は Java 版独自の責務としてこの repo 側で管理する
- upstream 差分を吸収するときは、互換対象と非互換対象を文書で明示する
- 判断に迷ったら、「利用者がこの repo だけ見て理解できるか」を優先する

## Minimal Commands

```bash
git remote add upstream https://github.com/igapyon/mikuproject-skills.git
git fetch upstream
git log --oneline --left-right HEAD...upstream/main
git diff --stat upstream/main -- README.md
git show upstream/main:README.md
```
