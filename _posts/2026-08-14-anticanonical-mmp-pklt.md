---
layout: paper
title: "Structure of the Anticanonical Minimal Model Program for Potentially klt Pairs"
title_ja: "potentially klt対に対する反標準極小モデル・プログラムの構造"
authors: "Donghyeon Kim, Dae-Won Lee"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2604.05369v1"
arxiv_url: "https://arxiv.org/abs/2604.05369"
arxiv_submitted: "2026-04-07"
arxiv_updated: "2026-04-07"
summary: >-
  potentially klt（pklt）対で反標準因子が双有理Zariski分解を持つ場合に反標準MMPの存在を別証明し、その各段階を $\mathbb Q$-factorial terminalization上の反標準非正写像へ持ち上げる。potential log discrepancyが全過程で保存される構造定理により、曲面では各段階の最小解消をredundant blow-upで結び付ける。
abstract_en: ""
summary_en: >-
  The paper studies anticanonical minimal model programs that begin with potentially klt pairs. Under a birational Zariski decomposition assumption, it supplies a new route to the existence of the program. More importantly, each partial program is lifted to compatible nonpositive maps between Q-factorial terminalizations, while potential log discrepancies remain unchanged. For surfaces, this structure translates into a sequence of redundant blow-ups between minimal resolutions and yields a classification result for certain nef-anticanonical klt surfaces.
abstract_ja: >-
  potentially klt対について、反標準因子が双有理Zariski分解を持つ場合の反標準MMPの存在に別証明を与える。さらに、任意の部分的反標準MMPを、その各段階の $\mathbb Q$-factorial terminalizationの間の両立する非正写像列へ持ち上げ、potential log discrepancyが保存されることを示す。
abstract_source_url: "https://arxiv.org/abs/2604.05369v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.05369v1](https://arxiv.org/abs/2604.05369v1)
- **著者:** Donghyeon Kim, Dae-Won Lee
- **初回投稿日・最終更新日:** 2026年4月7日（v1）
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

反標準因子 $-(K_X+\Delta)$ に対するMMPはFano幾何と、反標準類が擬有効な多様体の分類の境界にある。pklt条件は、反標準極小モデルが存在するときその出力がkltとなる対を捉える概念である。

第一の結果は、$-(K_X+\Delta)$ が双有理Zariski分解を持つpklt対に対して、ample因子によるスケーリング付き反標準MMPが存在するという既知定理の別証明である。次元2では反標準極小モデルの存在まで得る。

第二の新しい寄与はMMPの内部構造である。部分的反標準MMPの始点と終点の $\mathbb Q$-factorial terminalizationを選び、上階で反標準因子に関して非正な写像列として実現する。この持ち上げの間、全ての素因子に対するpotential log discrepancyが保存される。

曲面では、MMPの各段階の最小解消がredundant blow-upの列で結ばれる。さらに反標準因子がnefな正規射影klt曲面について、最小解消にredundant pointがない場合を標準特異点の場合と特定の例外曲線双対グラフの場合に分類する。

## 主結果

### 反標準MMPの存在（Theorem 1.1）

$(X,\Delta)$ をpklt対とし、$-(K_X+\Delta)$ が双有理Zariski分解を持つとする。このときample因子によるスケーリング付き $-(K_X+\Delta)$-MMPが存在する。さらに $\dim X=2$ なら反標準極小モデルが存在する。本論文ではこの既知結果に別証明を与える。

### terminalization上の構造定理（Theorem 1.2）

$\phi:(X,\Delta)\dashrightarrow(X',\Delta')$ をpklt対から始まる部分的 $-(K_X+\Delta)$-MMPとする。すると $\mathbb Q$-factorial terminalization

$$
p:(Y,\Delta_Y)\to(X,\Delta),\qquad
q:(Y',\Delta_{Y'})\to(X',\Delta')
$$

と、$-(K_Y+\Delta_Y)$-非正な写像の列 $\psi:(Y,\Delta_Y)\dashrightarrow(Y',\Delta_{Y'})$ を選べる。任意の $X$ 上の素因子 $E$ について

$$
\bar a(E;X,\Delta)=\bar a(E;X',\Delta')
=\bar a(E;Y,\Delta_Y)=\bar a(E;Y',\Delta_{Y'})
$$

が成り立つ。すなわちpotential log discrepancyはMMPとその持ち上げを通じて不変である。

### 曲面の最小解消（Corollary 1.3）

pklt曲面対の反標準MMPに対し、始点と終点の最小解消の間の写像はredundant blow-upの列として実現される。Theorem 1.2の抽象的な非正性を、曲面上の具体的な双有理操作へ翻訳した帰結である。

### nef反標準klt曲面（Theorem 1.4）

Introductionでは概略として次のように述べられている。$-K_S$ がnefな正規射影klt曲面 $S$ の最小解消 $S'\to S$ にredundant pointがないことは、$S$ が標準特異点のみを持つか、例外集合の双対グラフが定理に列挙された形のいずれかであることと同値である。図式的な全リストは原論文のTheorem 1.4を参照されたい。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.05369v1](https://arxiv.org/abs/2604.05369v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.4; Corollary 1.3
- **論文構成の説明:** Section 1, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
